import React, { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';


import BsFonts from '@meronex/icons/bs/BsFonts';
import MdAttachFile from '@meronex/icons/md/MdAttachFile';

import CustomInputComponent from '../../Input'

function validateForm({ color }) {
    const errors = {};
    if (!color) errors.color = 'Required'
    return errors;
}

export default function CreateForm({ company, create, onSuccess }) {

    async function handleFormSubmit(values, { setSubmitting, setStatus }) {
        values.colors.push(values.color);
        
        setSubmitting(true)
        const res = await create({ company: { ...values } })
        setSubmitting(false)
        if (res?.success) {
            onSuccess()
        }
        else {
            values.colors.pop();
            setStatus(res?.error || "An error occurred")
        }
    }

    return (
        <Formik
            initialValues={{ ...company }}
            validate={validateForm}
            onSubmit={handleFormSubmit}
        >
            {({ status, isValid, isSubmitting, setFieldValue, values }) => (
                <Form>
                    <div className="mb-6 mx-10">
                        <Field
                            name="color"
                            component={CustomInputComponent}
                            placeholder="Color hex"
                            required={true}
                            IconClass={BsFonts}
                            value={undefined}
                        />
                    </div>

                    {status && <p className="text-center mb-2 text-sm text-red-600">{status}</p>}

                    <button disabled={!isValid || isSubmitting} className="gradient text-white hover:opacity-70 transition-opacity duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center content-center max-w-20" type="submit">
                        Create
                    </button>
                </Form>
            )}
        </Formik>
    )
}