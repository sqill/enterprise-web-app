import React, { useEffect, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';

import MdcLinkVariant from '@meronex/icons/mdc/MdcLinkVariant';
import MdcDomain from '@meronex/icons/mdc/MdcDomain';
import MdcShapeOutline from '@meronex/icons/mdc/MdcShapeOutline';

import CustomInputComponent from '../../Input'
import CustomSelectComponent from '../../Select'
import { isValidHttpUrl } from '../../../utils'

import sponsorsStore from '../../../stores/sponsors'

const PLATFORMS = [
  { label: "Instagram", value: "instagram" },
  { label: "TikTok", value: "tiktok" },
  { label: "Other", value: "other" }
]

function validateForm({ url, sponsor_id, platform }) {
  const errors = {};
  if (!url) errors.url = 'Required'
  if (!platform) errors.platform = 'Required'
  if (!sponsor_id) errors.sponsor_id = 'Required'
  if (url && !isValidHttpUrl(url)) errors.url = 'Not a valid URL'

  return errors;
}


export default function CreateForm({ create, onSuccess }) {
  const { list, fetch } = sponsorsStore()

  useEffect(() => {
    fetch()
  }, [])

  async function handleFormSubmit(values, { setSubmitting, setStatus }) {
    setSubmitting(true)
    const res = await create({ ad_post: { ...values } })
    setSubmitting(false)
    if (res?.success) {
      onSuccess()
    }
    else setStatus(res?.error || "An error occurred")
  }

  const sponsorsList = list.map(sponsor => ({ label: sponsor.name, value: sponsor.id }))

  return (
    <Formik
      initialValues={{
        sponsor_id: "",
        url: '',
        platform: ""
      }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      {({ status, isValid, isSubmitting, setFieldValue, values }) => (
        <Form>
          <div className="mb-6">
            <Field
              name="platform"
              placeholder="Platform"
              required={true}
              IconClass={MdcShapeOutline}
              options={PLATFORMS}
              component={CustomSelectComponent}
            />
          </div>
          <div className="mb-6">
            <Field
              name="url"
              component={CustomInputComponent}
              placeholder="Post URL"
              type="url"
              required={true}
              IconClass={MdcLinkVariant}
              showError
            />
          </div>
          <div className="mb-6">
            <Field
              name="sponsor_id"
              placeholder="Sponsor"
              required={true}
              IconClass={MdcDomain}
              options={sponsorsList}
              component={CustomSelectComponent}
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