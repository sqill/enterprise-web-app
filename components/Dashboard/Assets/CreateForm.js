import React, { useState, useMemo, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import MdcFormatTitle from '@meronex/icons/mdc/MdcFormatTitle';
import MdcShapeOutline from '@meronex/icons/mdc/MdcShapeOutline';
import MdcFolderImage from '@meronex/icons/mdc/MdcFolderImage';
import LoadingFilesCounter from './LoadingFiles';

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
  { label: "Banner", value: "foreground" },
  { label: "Logos", value: "logos" },
  { label: "Effects", value: "effects" }
]

const ASSET_TYPES = [
  { label: "Image", value: "image" },
  { label: "Animation", value: "animation" }
]
export default function CreateForm({ uploads, setShowLoadingPopup, setUploads, create, onSuccess, formProps: { type, format } }) {
  const { folders } = assetsStore();
  const foldersDropdown = folders.map((f) => ({ label: f.name, value: f.name }));
  const [previewUrl, setPreviewUrl] = useState('');
   // State for controlling popup visibility

  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true);

    try {
      if (values.asset instanceof File) {
        // Single file upload case
        const res = await create({
          video_asset: { ...values, folder: values.folder === '' ? null : values.folder },
        });
        if (res?.success) {
          setSuccessfulUploads(1);
          onSuccess();
        } else {
          setFailedUploads(1);
          setStatus(res?.error || 'An error occurred');
          setLoadedFilesErrors([res?.error || 'An error occurred']);
        }
      } else if (values.asset instanceof FileList) {
        setShowLoadingPopup(true)
        setUploads({ ...uploads, totalFiles: values.asset.length })
        // Multiple files upload case
        for (let i = 0; i < values.asset.length; i++) {
          const file = values.asset[i];
          const res = await create({
            video_asset: { ...values, asset: file, folder: values.folder === '' ? null : values.folder },
          });
          if (res) {
            if (res?.success) {
              setUploads({ ...uploads, successfulUploads: uploads.successfulUploads + 1 });
            } else {
              setUploads({ ...uploads, failedUploads: uploads.failedUploads + 1 });
              setUploads({ ...uploads, loadedFilesErrors: [...uploads.loadedFilesErrors, i ]});
            }
          }
        }
        
        setShowLoadingPopup(false);
        onSuccess(); // Call onSuccess after all files are uploaded successfully
      } else {
        // Handle other cases if needed
        setStatus('Invalid asset type');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setStatus('An error occurred while processing the form');
    }

    setSubmitting(false);
    // Hide loading popup when done
  }
  

  return (
    <>
 
    <Formik
      initialValues={{
        name: '',
        bundle_type: type,
        asset: '',
        asset_type: format,
        assets: [],
        fps: null,
        count: null,
        columns: null,
        rows: null,
        loop: false,
        uploadTilesheet: false,
        folder: ""
      }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="mb-6 mx-10">
            <Field
              name="name"
              component={CustomInputComponent}
              placeholder="Asset name"
              required={false}
              IconClass={MdcFormatTitle}
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
              <div className="mb-6 mx-10">
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
              <div className="mb-6 mx-10">
                <Field
                  name="columns"
                  component={CustomInputComponent}
                  placeholder="Columns (5)"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6 mx-10">
                <Field
                  name="rows"
                  component={CustomInputComponent}
                  placeholder="Rows (5)"
                  required={true}
                  type="number"
                  min="1"
                />
              </div>
              <div className="mb-6 mx-10">
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
                  <input name="asset" accept="image/*" type="file" multiple={true} onChange={e => {
                    if (e.target.files.length > 1) {
                      setFieldValue("asset", e.target.files);
                    } else {
                      setFieldValue("asset", e.target.files[0]);
                    }
                  }} />
                ) : (
                  null
              )}
            </Field>
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}
          
          <button disabled={!isValid || isSubmitting} className="gradient text-white hover:opacity-70 font-medium rounded-lg text-sm px-5 py-2.5 text-center max-w-20" type="submit">
            Create
          </button>
        </Form>
      )}
    </Formik>
    
    </>
  )
}