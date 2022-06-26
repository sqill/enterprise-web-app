import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import MdcBriefcaseAccountOutline from '@meronex/icons/mdc/MdcBriefcaseAccountOutline';
import MdcEmailEditOutline from '@meronex/icons/mdc/MdcEmailEditOutline';

import CustomInputComponent from '../../Input'

function validateForm({ name, email }) {
  const errors = {};
  if (!name) errors.name = 'Required'

  return errors;
}


export default function CreateForm({ create, onSuccess }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ sponsor: { ...values } })
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
        email: null
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
              placeholder="Sponsor name"
              required={true}
              IconClass={MdcBriefcaseAccountOutline}
            />
          </div>
          <div className="mb-6">
            <Field
              name="email"
              component={CustomInputComponent}
              placeholder="Sponsor email"
              required={false}
              type="email"
              IconClass={MdcEmailEditOutline}
            />
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