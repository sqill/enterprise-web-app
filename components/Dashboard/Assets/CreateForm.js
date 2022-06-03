import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MdcWeb from '@meronex/icons/mdc/MdcWeb';

import CustomInputComponent from '../../Input'
import CustomSelectComponent from '../../Select'

import { createVideoAsset } from '../../../api'

function validateForm({ name, category, asset, asset_type, assets, fps }) {
  const errors = {};
  if (!category) errors.category = 'Required'
  if (!asset && asset_type === "image") errors.asset = 'Required'
  if (!assets && asset_type === "animation") errors.assets = 'Required'
  if (!fps && asset_type === "animation") errors.fps = 'Required'

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
      initialValues={{ name: '', category: 'foreground', asset: '', asset_type: 'image', assets: [], fps: null }}
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
            <div className="mb-6">
              <Field
                name="fps"
                component={CustomInputComponent}
                placeholder="Animation FPS (30)"
                required={true}
              />
            </div>
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
              {() => values.asset_type === "image" ? (
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