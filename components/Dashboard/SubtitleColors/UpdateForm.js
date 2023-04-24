import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BsFonts from '@meronex/icons/bs/BsFonts';
import MdAttachFile from '@meronex/icons/md/MdAttachFile';

import CustomInputComponent from '../../Input'

function validateForm({ background, foreground }) {
  const errors = {};
  if (!background) errors.background = 'Required'
  if (!foreground) errors.foreground = 'Required'

  return errors;
}


export default function UpdateForm({ color, update, onSuccess }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await update(
      color.id,
      { subtitle_color: { ...values } }
    )
    setSubmitting(false)
    if (res?.success) {
      onSuccess()
    }
    else setStatus(res?.error || "An error occurred")
  }

  return (
    <Formik
      initialValues={{...color}}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="background"
              component={CustomInputComponent}
              placeholder="Background color"
              required={true}
              IconClass={BsFonts}
            />
          </div>
          <div className="mb-6">
            <Field
              name="foreground"
              component={CustomInputComponent}
              placeholder="Font color"
              required={true}
              IconClass={BsFonts}
            />
          </div>
          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Update
          </button>
        </Form>
      )}
    </Formik>
  )
}