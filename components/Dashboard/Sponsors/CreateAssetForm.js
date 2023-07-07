import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MdcFormatTitle from '@meronex/icons/mdc/MdcFormatTitle';
import MdcShapeOutline from '@meronex/icons/mdc/MdcShapeOutline';
import MdcFolderImage from '@meronex/icons/mdc/MdcFolderImage';

import CustomInputComponent from '../../Input'
import CustomCheckboxComponent from '../../Checkbox'
import CustomSelectComponent from '../../Select'

import assetsStore from '../../../stores/video_assets'

function validateForm({ name, bundle_type, asset, asset_type, assets, fps, uploadTilesheet, rows, columns, count }) {
  const errors = {};
  if (!name) errors.name = 'Required'
  if (!bundle_type) errors.bundle_type = 'Required'
  if (!asset && asset_type === "image") errors.asset = 'Required'
  if (!assets && asset_type === "animation") errors.assets = 'Required'
  if (!fps && asset_type === "animation") errors.fps = 'Required'

  if (asset_type === "animation" && uploadTilesheet) {
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

const ASSET_TYPES = [
  { label: "Image", value: "image" },
  { label: "Animation", value: "animation" }
]

export default function CreateForm({ create, onSuccess, sponsor }) {
  const { folders } = assetsStore()
  const foldersDropdown = folders.map(f => ({ label: f.name, value: f.name }));

  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ video_asset: { ...values} })
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
        bundle_type: 'foreground',
        asset: '',
        asset_type: 'image',
        assets: [],
        fps: null,
        count: null,
        columns: null,
        rows: null,
        loop: false,
        uploadTilesheet: false,
        folder: sponsor
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
              IconClass={MdcFormatTitle}
            />
          </div>
          <div className="mb-6">
            <Field
              name="asset_type"
              placeholder="Asset type"
              required={true}
              component={CustomSelectComponent}
              options={ASSET_TYPES}
              IconClass={MdcShapeOutline}
            />
          </div>
          <div className="mb-6">
            <Field
              name="bundle_type"
              placeholder="Bundle type"
              required={true}
              component={CustomSelectComponent}
              options={BUNDLE_TYPES}
              IconClass={MdcShapeOutline}
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
                  name="count"
                  component={CustomInputComponent}
                  placeholder="Number of tiles in tilesheet"
                  required={true}
                  type="number"
                  min="1"
                  max="60"
                />
              </div>
            </>
          )}
          <div className="mb-6">
            <Field name="image">
              {() => values.asset_type === "image" || values["uploadTilesheet"] ? (
                <input name="asset" accept="image/*" type="file" onChange={e => setFieldValue("asset", e.target.files[0])} />
              ) : (
                <input name="asset" accept="image/*" type="file" multiple onChange={e => setFieldValue("assets", e.target.files)} />
              )}
            </Field>
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="gradient text-white hover:opacity-70 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Create
          </button>
        </Form>
      )}
    </Formik>
  )
}