import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import cx from "classnames";
import countryList from 'react-select-country-list'


import MdEmail from '@meronex/icons/md/MdEmail';
import MdcBriefcaseAccount from '@meronex/icons/mdc/MdcBriefcaseAccount';
import MdcCity from '@meronex/icons/mdc/MdcCity';
import MdcWeb from '@meronex/icons/mdc/MdcWeb';
import MdcLabelPercent from '@meronex/icons/mdc/MdcLabelPercent';
import FiCheckCircle from '@meronex/icons/fi/FiCheckCircle';

import { event, identify } from '../analytics'
import { signup } from '../api'

function validateForm({ name, email, country_code, address, vat_number, website }) {
  const errors = {};
  if (!name) errors.name = 'Required'
  if (!email) errors.email = 'Required'
  if (!country_code) errors.country_code = 'Required'


  return errors;
}

const CustomInputComponent = ({ field, form: { touched, errors }, title, IconClass, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  const labelClassName = cx(
    "text-sm font-medium text-gray-900 block mb-2",
    { "text-red-700": hasError }
  );
  const inputClassName = cx(
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",
    { "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );
  return  (
    <React.Fragment>
      {title && <label htmlFor={field.name} className={labelClassName}>{title}</label>}
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconClass className="text-gray-400 text-lg" />
        </div>
        <input type="text" className={inputClassName} {...field} {...props} />
      </div>

      {/* {hasError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>} */}
    </React.Fragment>
  );
}

const CustomSelectComponent = ({ field, form: { touched, errors }, options, IconClass, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  const inputClassName = cx(
    "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5",
    { "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500": hasError }
  );
  return  (
    <React.Fragment>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconClass className="text-gray-400 text-lg" />
        </div>
        <select className={inputClassName} {...field} {...props}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* {hasError && <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>} */}
    </React.Fragment>
  );
}

export default function SignupForm() {
  const [formState, setFormState] = useState("fresh");
  const options = useMemo(() => countryList().getData(), [])

  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await signup(values)
    identify({ email: values.email })
    setSubmitting(false)
    if (res?.success) setFormState("finished")
    else setStatus(res?.error || "An error occurred")
  }

  if (formState === "finished") {
    return (
      <div className="text-center">
        <FiCheckCircle className="text-6xl m-auto text-primary-500" />
        <h2>Thanks for your interest in <em>sqill</em>! We&apos;ll contact you soon.</h2>
      </div>
    )
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', country_code: '', website: '', address: '', vat_number: '' }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="name"
              component={CustomInputComponent}
              placeholder="Company name"
              IconClass={MdcBriefcaseAccount}
              required={true}
            />
          </div>
          <div className="mb-6">
            <Field
              name="email"
              component={CustomInputComponent}
              placeholder="Company email"
              IconClass={MdEmail}
              required={true}
              type="email"
            />
          </div>
          <div className="mb-6">
            <Field
              name="country_code"
              placeholder="Company country"
              required={true}
              component={CustomSelectComponent}
              options={options}
              IconClass={MdcCity}
            />
          </div>
          <div className="mb-6">
            <Field
              name="address"
              component={CustomInputComponent}
              placeholder="Company address"
              IconClass={MdcCity}
            />
          </div>
          <div className="mb-6">
            <Field
              name="website"
              component={CustomInputComponent}
              placeholder="Company website"
              IconClass={MdcWeb}
            />
          </div>
          <div className="mb-6">
            <Field
              name="vat_number"
              component={CustomInputComponent}
              placeholder="Company VAT number"
              IconClass={MdcLabelPercent}
            />
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Register your company
          </button>
        </Form>
      )}
    </Formik>
  )
}