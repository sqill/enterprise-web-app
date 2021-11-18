import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { updatePassword } from '../api'
import { useRouter } from 'next/router'

const Error = ({ children }) => <p className="error">{children}</p>

function validateForm({ token, password, passwordConfirmation }) {
  const errors = {};
  if (!password) errors.password = 'Required';
  if (!passwordConfirmation) errors.passwordConfirmation = 'Required';
  if (password && password.length < 6) errors.password = 'Password is too short';

  if (!passwordConfirmation || passwordConfirmation === '') errors.passwordConfirmation = 'Please repeat your password'
  if (
    password
    && passwordConfirmation
    && password !== passwordConfirmation
  ) {
    errors.passwordConfirmation = 'Passwords are not equal'
  }
  if(!token || token == 0) errors.token = 'Reset token required'

  return errors;
}

export default function ResetPasswordPage() {
  const router = useRouter()
  const [isDone, setIsDone] = React.useState(false);
  const { token } = router.query

  return (
    <div className="py-10">
      <h1 className="text-5xl text-center mb-12">
        Reset password
      </h1>

      {isDone && (
        <h3 className="text-2xl text-primary-500 text-center mb-12">
          You can now login with your new password in the app
        </h3>
      )}

      {!isDone && (
        <Formik
          enableReinitialize
          initialValues={{ password: '', passwordConfirmation: '', token }}
          validate={validateForm}
          onSubmit={async ({password, passwordConfirmation, token}, { setSubmitting, setStatus }) => {
            setSubmitting(true)
            const res = await updatePassword(password, passwordConfirmation, token)
            setSubmitting(false)
            if (res.success) setIsDone(true)
            else setStatus('An error occurred')
          }}
        >
          {({ status }) => (
            <Form className="flex flex-col w-1/2 mx-auto">
              <Field type="password" name="password" placeholder="New password" />
              <ErrorMessage name="password" component={Error} />
              <Field type="password" name="passwordConfirmation" placeholder="Password confirmation" className="mt-4" />
              <ErrorMessage name="passwordConfirmation" component={Error} />
              <ErrorMessage name="token" component={Error} />

              {status && <p className="text-center mt-4 text-red">{status}</p>}
              <button className="btn btn-primary mt-4" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}
