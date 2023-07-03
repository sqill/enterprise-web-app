import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, FieldArray } from 'formik';
import MdcTrashCanOutline from '@meronex/icons/mdc/MdcTrashCanOutline';

import { updateCompany } from '../../../api'

import CustomInputComponent from '../../Input'

function validateForm({ name }) {
  const errors = {};
  if (!name) errors.name = 'Required'

  return errors;
}


export default function UpdateForm({ company }) {
  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await updateCompany({ company: { ...values } })
    setSubmitting(false)
    if (res?.success) {

    }
    else setStatus(res?.error || "An error occurred")
  }

  return (
    <Formik
      initialValues={{ ...company }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, values }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="name"
              component={CustomInputComponent}
              placeholder="Name"
              required={true}
            />
          </div>
          <div className="mb-6">
            <Field
              name="vat_number"
              component={CustomInputComponent}
              placeholder="VAT number"
              type="number"
            />
          </div>

          <h2>Colors</h2>
          <FieldArray
            name="colors"
            render={arrayHelpers => (
              <div>
                {values.colors && values.colors.length > 0 &&
                  values.colors.map((color, index) => (
                    <div key={index}>
                      <div className="flex flex-row">
                        <Field placeholder="#123456" component={CustomInputComponent} name={`colors.${index}`} />
                        <button
                          type="button"
                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg leading-3 inline-flex items-center px-1 py-1 text-center"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <MdcTrashCanOutline />
                        </button>
                      </div>
                    </div>
                  ))
                }
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center" onClick={() => arrayHelpers.push('')}>Add a color</button>
              </div>
            )}
          />

          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full" type="submit">
            Update
          </button>
        </Form>
      )}
    </Formik>
  )
}