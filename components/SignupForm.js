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

import CustomInputComponent from './Input'
import CustomSelectComponent from './Select'

import { event, identify } from '../analytics'
import { signup } from '../api'

function validateForm({ name, email, country_code, address, vat_number, website }) {
  const errors = {};
  if (!name) errors.name = 'Required'
  if (!email) errors.email = 'Required'
  if (!country_code) errors.country_code = 'Required'


  return errors;
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
        <h2>Thanks for your interest in <em> sqill </em>! We&apos;ll contact you soon.</h2>
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
          <div className="mb-4 font-light">
            Company name
            <Field
              name="name"
              component={CustomInputComponent}
              placeholder="Enter your company name"
              IconClass={MdcBriefcaseAccount}
              required={true}
            />
          </div>
          <div className="mb-4 font-light">
            Company email
            <Field
              name="email"
              component={CustomInputComponent}
              placeholder="Enter your company email"
              IconClass={MdEmail}
              required={true}
              type="email"
            />
          </div>
          <div className="mb-4 font-light">
            Company country
            <Field
              name="country_code"
              placeholder="Enter your company country"
              required={true}
              component={CustomSelectComponent}
              options={options}
              IconClass={MdcCity}
            />
          </div>
          <div className="mb-4 font-light">
            Company address
            <Field
              name="address"
              component={CustomInputComponent}
              placeholder="Enter your company address"
              IconClass={MdcCity}
            />
          </div>
          <div className="mb-4 font-light">
            Company website
            <Field
              name="website"
              component={CustomInputComponent}
              placeholder="Enter your company website"
              IconClass={MdcWeb}
            />
          </div>
          <div className="mb-4 font-light">
            Company VAT Number
            <Field
              name="vat_number"
              component={CustomInputComponent}
              placeholder="Enter your company VAT number"
              IconClass={MdcLabelPercent}
            />
          </div>

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="gradient text-white hover:opacity-70 font-medium rounded-lg text-sm px-5 py-2.5 text-center max-w-20" type="submit">
            Register your company
          </button>
        </Form>
      )}
    </Formik>
  )
}