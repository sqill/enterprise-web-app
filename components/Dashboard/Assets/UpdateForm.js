import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MdcWeb from '@meronex/icons/mdc/MdcWeb';
import MdcFormatTitle from '@meronex/icons/mdc/MdcFormatTitle';
import MdcShapeOutline from '@meronex/icons/mdc/MdcShapeOutline';

import CustomInputComponent from '../../Input'
import CustomCheckboxComponent from '../../Checkbox'
import CustomSelectComponent from '../../Select'

function validateForm({ name, bundle_type, asset, asset_type, fps, uploadTilesheet, rows, columns, count }) {
  const errors = {};
  if (!bundle_type) errors.bundle_type = 'Required'
  if (!name) errors.name = 'Required'

  if(asset_type === "animation" && uploadTilesheet) {
    if (!rows) errors.rows = 'Required'
    if (!columns) errors.columns = 'Required'
    if (!asset) errors.asset = 'Required'
    if (!count) errors.count = 'Required'
  }

  return errors;
}

const BUNDLE_TYPES = [
  { label: "Overlay", value: "overlay" },
  { label: "Foreground", value: "foreground" },
  { label: "Logos", value: "logos" },
  { label: "Effects", value: "effects" }
]


export default function UpdateForm({ asset, update, onSuccess }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await update(asset.id, { video_asset: { ...values } })
    setSubmitting(false)
    if (res?.success) {
      onSuccess()
    }
    else setStatus(res?.error || "An error occurred")
  }

  return (
    <Formik
      initialValues={asset}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, values }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="name"
              component={CustomInputComponent}
              title="Asset name"
              required={false}
              IconClass={MdcFormatTitle}
            />
          </div>
          {values.asset_type === "animation" && (
            <>
              <div className="mb-6">
                <Field
                  name="fps"
                  component={CustomInputComponent}
                  title="Animation FPS"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="loop"
                  component={CustomCheckboxComponent}
                  title="Loops?"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="columns"
                  component={CustomInputComponent}
                  title="Columns"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="rows"
                  component={CustomInputComponent}
                  title="Rows"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="count"
                  component={CustomInputComponent}
                  title="Number of tiles in tilesheet"
                  required={true}
                  type="number"
                  min="1"
                  max="60"
                />
              </div>
            </>
          )}

          {values.asset_type === "image" && (
            <div className="mb-6">
              <Field
                name="bundle_type"
                title="Bundle type"
                required={true}
                component={CustomSelectComponent}
                options={BUNDLE_TYPES}
                IconClass={MdcShapeOutline}
              />
            </div>
          )}


          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Update
          </button>
        </Form>
      )}
    </Formik>
  )
}