import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ReactCountryFlag from 'react-country-flag'
import Head from 'next/head'

import { event, identify } from '../gtag'
// import Autocomplete from '../components/Autocomplete'

const Error = ({ children }) => <p className="error">{children}</p>

function validateForm({ name, email, links, files, club }) {
  const errors = {};
  if (!name) errors.name = 'Required'
  if (!email) errors.email = 'Required'
  if (!club) errors.club = 'Required'

  // if(files.some(f => !f)) errors.files = []
  // files.forEach((f, i) => {
  //   if(!f) errors.files[i] = 'Required'
  // })

  // if((!links || links === '') && files.length === 0) errors.links = 'Either links or uploaded files are required'
  return errors;
}



export default function SubmitPage() {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="py-20">
      <Head>
        <title>Submit your highlight videos - sqill</title>
      </Head>

      <div className="justify-center mb-12 flex flex-col sm:flex-row mb-12 text-center">
        <h1 className="text-5xl sm:mr-6">Submit your <span className="text-primary-500">highlights</span></h1>
      </div>

      <div className="flex flex-col w-4/5 sm:2/3 mx-auto">
        <p className="text-center text-sm mb-1">
          <span className="mr-2"><ReactCountryFlag svg countryCode="GB" /></span>
          Send us your highlight videos.
        </p>
        <p className="text-center mb-12 text-sm">
          <span className="mr-2"><ReactCountryFlag svg countryCode="PT" /></span>
          Envia-nos os teus vídeos de highlights que o nosso 🤖 (robot) transforma-os em sqills e actualiza o teu perfil.
        </p>
      </div>
      <div className="flex flex-col w-2/3 mx-auto">
        {isDone ? (
          <h2 className="text-3xl text-primary-500 text-center mb-12">
            Thank you for your submission!
          </h2>
        ) : (
          <Formik
            initialValues={{ name: '', email: '', links: '', files: [], club: '' }}
            validate={validateForm}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              setSubmitting(true)
              const res = await submitHighlights(values)
              event({ action: 'pre_signup', category: 'sign_up' })
              identify({ name: values.name, email: values.email })
              setSubmitting(false)
              if (res) setIsDone(true)
              else setStatus('An error occurred')
            }}
          >
            {({ status, values, isValid }) => (
              <Form>
                <Field type="text" name="name" placeholder="Full name" className="w-full" />
                <ErrorMessage name="name" component={Error} />
                <Field type="email" name="email" placeholder="Email" className="mt-4 w-full" />
                <ErrorMessage name="email" component={Error} />
                <Field type="text" name="club" placeholder="Club" className="mt-4 w-full" />
                <ErrorMessage name="club" component={Error} />

                <Field type="text" name="links" placeholder="Video links (youtube, vimeo, etc)" className="mt-4 mb-4 w-full" component="textarea" />
                <ErrorMessage name="links" component={Error} />



                <button disabled={!isValid} className="btn btn-primary mt-4 w-full" type="submit">
                  Submit videos
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>

    </div>
  )
}
