import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BsFonts from '@meronex/icons/bs/BsFonts';
import MdcFormatFont from '@meronex/icons/mdc/MdcFormatFont';

import CustomSelectComponent from '../../Select'
import CustomInputComponent from '../../Input'
import fontsStore from '../../../stores/fonts'

function validateForm({ background, foreground }) {
  const errors = {};
  if (!background) errors.background = 'Required'
  if (!foreground) errors.foreground = 'Required'

  return errors;
}


export default function UpdateForm({ color, update, onSuccess }) {
  const { list, fetch: fetchFonts } = fontsStore()

  useEffect(() => {
    fetchFonts()
  }, [])

  const fontsDropdown = list.map(f => ({ label: f.name, value: f.id }));

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
      initialValues={{ background: color.background, foreground: color.foreground, company_font_id: color.company_font?.id }}
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
          <div className="mb-6">
            <Field
              name="company_font_id"
              placeholder="Font"
              component={CustomSelectComponent}
              options={fontsDropdown}
              IconClass={MdcFormatFont}
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