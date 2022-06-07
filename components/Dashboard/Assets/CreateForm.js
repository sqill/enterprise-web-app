import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MdcWeb from '@meronex/icons/mdc/MdcWeb';

import CustomInputComponent from '../../Input'
import CustomCheckboxComponent from '../../Checkbox'
import CustomSelectComponent from '../../Select'

import { createVideoAsset } from '../../../api'

function validateForm({ name, category, asset, asset_type, assets, fps, uploadTilesheet, rows, columns, size, count }) {
  const errors = {};
  if (!category) errors.category = 'Required'
  if (!asset && asset_type === "image") errors.asset = 'Required'
  if (!assets && asset_type === "animation") errors.assets = 'Required'
  if (!fps && asset_type === "animation") errors.fps = 'Required'

  if(asset_type === "animation" && uploadTilesheet) {
    if (!rows) errors.rows = 'Required'
    if (!columns) errors.columns = 'Required'
    if (!size) errors.size = 'Required'
    if (!asset) errors.asset = 'Required'
    if (!count) errors.count = 'Required'
  }

  return errors;
}

const CATEGORIES = [
  { label: "Background", value: "background" },
  { label: "Foreground", value: "foreground" }
]

const ASSET_TYPES = [
  { label: "Image", value: "image" },
  { label: "Animation", value: "animation" }
]

export default function CreateForm({ create, onSuccess }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ video_asset: { ...values } })
    setSubmitting(false)
    if (res?.success) {
      onSuccess()
    }
    else setStatus(res?.error || "An error occurred")
  }

  return (
    <Formik
      initialValues={{
        name: '',
        category: 'foreground',
        asset: '',
        asset_type: 'image',
        assets: [],
        fps: null,
        count: null,
        size: null,
        columns: null,
        rows: null,
        loop: false,
        uploadTilesheet: false
      }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="name"
              component={CustomInputComponent}
              placeholder="Asset name"
              required={false}
            />
          </div>
          <div className="mb-6">
            <Field
              name="asset_type"
              placeholder="Asset type"
              required={true}
              component={CustomSelectComponent}
              options={ASSET_TYPES}
            />
          </div>
          {values.asset_type === "animation" && (
            <>
              <div className="mb-6">
                <Field
                  name="uploadTilesheet"
                  component={CustomCheckboxComponent}
                  title="Upload prebuilt tilesheet?"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="fps"
                  component={CustomInputComponent}
                  placeholder="Animation FPS"
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
            </>
          )}
          {values["uploadTilesheet"] && (
            <>
              <div className="mb-6">
                <Field
                  name="columns"
                  component={CustomInputComponent}
                  placeholder="Columns (5)"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="rows"
                  component={CustomInputComponent}
                  placeholder="Rows (5)"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="size"
                  component={CustomInputComponent}
                  placeholder="Tile size, pixels (128)"
                  required={true}
                  type="number"
                  min="32"
                  max="512"
                />
              </div>
              <div className="mb-6">
                <Field
                  name="count"
                  component={CustomInputComponent}
                  placeholder="Number of tiles in tilesheet"
                  required={true}
                  type="number"
                  min="1"
                  max="30"
                />
              </div>
            </>
          )}
          {values.asset_type === "image" && (
            <div className="mb-6">
              <Field
                name="category"
                placeholder="Category"
                required={true}
                component={CustomSelectComponent}
                options={CATEGORIES}
              />
            </div>
          )}
          <div className="mb-6">
            {/* <Field
              name="asset"
              type="file"
              placeholder="Company address"
              accept="image/*"
            /> */}
            <Field name="image">
              {() => values.asset_type === "image" || values["uploadTilesheet"] ? (
                <input name="asset" accept="image/*" type="file" onChange={e => setFieldValue("asset", e.target.files[0])} />
              ) : (
                <input name="asset" accept="image/*" type="file" multiple onChange={e => setFieldValue("assets", e.target.files)} />
              )}
            </Field>
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Create
          </button>
        </Form>
      )}
    </Formik>
  )
}