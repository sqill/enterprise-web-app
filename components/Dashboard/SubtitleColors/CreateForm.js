import React, { useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import BsFonts from '@meronex/icons/bs/BsFonts';
import MdcFormatFont from '@meronex/icons/mdc/MdcFormatFont';

import CustomSelectComponent from '../../Select'
import CustomInputComponent from '../../Input'
import fontsStore from '../../../stores/fonts'
import { useStore } from '../../../lib/store'


function validateForm({ foreground, company_font_id }) {
  const errors = {};
  if (!foreground) errors.foreground = 'Required'
  if (!company_font_id) errors.company_font_id = 'Required'

  return errors;
}


export default function CreateForm({ create, onSuccess }) {
  const { list, fetch: fetchFonts } = fontsStore()
  const { auth: { user } } = useStore()

  useEffect(() => {
    fetchFonts()
  }, [])

  const fontsDropdown = list.map(f => ({ label: f.name, value: f.id }));

  const colorsDropdown = user.entity.company?.colors?.map(color => (({ label: color, value: color })));


  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ subtitle_color: { ...values } })
    setSubmitting(false)
    if (res?.success) {
      onSuccess()
    }
    else setStatus(res?.error || "An error occurred")
  }

  return (
    <Formik
      initialValues={{
        background: '',
        foreground: '',
        company_font_id: ''
      }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="mb-6 mx-10">
            <Field
              name="foreground"
              component={CustomSelectComponent}
              placeholder="Font color"
              options={colorsDropdown}
              required={true}
              IconClass={BsFonts}
            />
          </div>
          <div className="mb-6 mx-10">
            <Field
              name="background"
              component={CustomSelectComponent}
              placeholder="Background color"
              IconClass={BsFonts}
              options={colorsDropdown}
            />
          </div>

          <div className="mb-6 mx-10">
            <Field
              name="company_font_id"
              placeholder="Font"
              component={CustomSelectComponent}
              options={fontsDropdown}
              required={true}
              IconClass={MdcFormatFont}
            />
          </div>
          {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

          <button disabled={!isValid || isSubmitting} className="gradient text-white hover:opacity-70 font-medium rounded-lg text-sm px-5 py-2.5 text-center max-w-20" type="submit">
            Create
          </button>
        </Form>
      )}
    </Formik>
  )
}