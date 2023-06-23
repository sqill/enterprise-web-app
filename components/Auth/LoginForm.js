import React, { useState, useMemo } from 'react'
import { Formik, Field, Form } from 'formik';

import MdEmail from '@meronex/icons/md/MdEmail';
import MdcFormTextboxPassword from '@meronex/icons/mdc/MdcFormTextboxPassword';

import { login } from '../../api'


const CustomInputComponent = ({ field, form, title, IconClass, ...props }) => {
  return (
    <React.Fragment>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconClass className="text-gray-400 text-lg" />
        </div>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" {...field} {...props} />
      </div>
    </React.Fragment>
  );
}


export default function LoginForm({ onSuccess }) {
  async function handleFormSubmit({ email, password }, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await login(email, password)
    setSubmitting(false)

    if (res?.success) {
      onSuccess()
    }
    else {
      setStatus(res.error)
    }
  }

  return (
    <Formik initialValues={{ email: null, password: null }} onSubmit={handleFormSubmit}>
      {({ status, isValid, isSubmitting }) => (
        <Form>
          <div className="mb-6 py-2 rounded-full">
            <p>
              Email
            </p>
            <Field
              name="email"
              component={CustomInputComponent}
              placeholder="test1@gmail.com"
              IconClass={MdEmail}
              required={true}
              type="email"
              value={undefined}
            />
          </div>
          <div className="mb-6 py-3">
            <p>
              Password
            </p>
            <Field
              name="password"
              component={CustomInputComponent}
              placeholder="************"
              IconClass={MdcFormTextboxPassword}
              required={true}
              type="password"
              value={undefined}
            />
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="text-white gradient hover:opacity-70 transition-opacity duration-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-1/3 mx-auto flex justify-center" type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  )
}
