import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BsFonts from '@meronex/icons/bs/BsFonts';
import MdAttachFile from '@meronex/icons/md/MdAttachFile';

import CustomInputComponent from '../../Input'

function validateForm({ name, font }) {
  const errors = {};
  if (!name) errors.name = 'Required'
  if (!font) errors.font = 'Required'

  return errors;
}


export default function CreateForm({ create, onSuccess }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ font: { ...values } })
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
        font: null
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
              placeholder="Font name"
              required={true}
              IconClass={BsFonts}
            />
          </div>
          <div className="mb-6">
            {/* <Field name="font"> */}
              <input name="font" type="file" onChange={e => setFieldValue("font", e.target.files[0])} />
            {/* </Field> */}

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