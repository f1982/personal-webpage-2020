import * as React from 'react'
import { Formik, Form, Field, FormikHelpers, useFormikContext } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

import RouteLeavingGuard from '../../../comps/Popup/RouteLeavingGuard'
import { Button, TextField } from '@material-ui/core'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  content: string
}

const PromptIfDirty2 = () => {
  const formik = useFormikContext()
  // console.log('formik.submitCount', formik.submitCount)
  // console.log('formik.dirty', formik.dirty)

  return (
    <RouteLeavingGuard
      // When should shouldBlockNavigation be invoked,
      // simply passing a boolean
      // (same as "when" prop of Prompt of React-Router)
      when={formik.dirty && formik.submitCount === 0}
      // Navigate function
      navigate={path => {
        console.log('path:', path)
      }}
      // Use as "message" prop of Prompt of React-Router
      shouldBlockNavigation={location => {
        console.log('location', location)
        // This case it blocks the navigation when:
        // 1. the login form is dirty, and
        // 2. the user is going to 'sign-up' scene.
        //    (Just an example, in real case you might
        //     need to block all location regarding this case)
        if (formik.dirty) {
          if (location.pathname === '/resume') {
            return true
          }
        }
        return false
      }}
    />
  )
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(16, 'Please input 16 characters or less')
    .required('Please input userName name'),
  lastName: Yup.string()
    .max(16, 'Please input 16 characters or less')
    .required('Please input userName name'),
  email: Yup.string()
    .max(50, 'Pls input less than 50 characters')
    .email('must be a email address')
    .required('email can not be empty'),
  content: Yup.string()
    .min(5, 'pls input at least 4 characters')
    .max(300, 'Pls input less than 300 characters')
    .required('pls input subject')
})

const sleep = (ms: number) =>
  new Promise<number>(resolve => setTimeout(resolve, ms))

interface ContactFormProps {
  onSubmit: (values: FormValues, helper: FormikHelpers<FormValues>) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit
}: ContactFormProps) => {
  const handleSubmit = async (
    values: FormValues,
    helper: FormikHelpers<FormValues>
  ) => {
    await sleep(500)
    onSubmit(values, helper)
    helper.setSubmitting(false)
  }

  const formValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    content: ''
  }

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        isSubmitting,
        dirty,
        handleSubmit,
        handleChange
      }) => (
        <form
          onSubmit={handleSubmit}
          title='Contact Form'
          style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id='firstName'
            label='First Name'
            type='text'
            onChange={handleChange('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
            value={values.firstName}
            placeholder='First Name'
          />

          <TextField
            id='lastName'
            label='Last Name'
            type='text'
            onChange={handleChange('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName}
            value={values.lastName}
            placeholder='Last Name'
          />

          <TextField
            id='email'
            label='Email'
            type='text'
            onChange={handleChange('email')}
            error={!!errors.email}
            helperText={errors.email}
            value={values.email}
          />

          <TextField
            multiline
            id='content'
            label='Content'
            type='text'
            onChange={handleChange('content')}
            error={!!errors.content}
            helperText={errors.content}
            value={values.content}
          />
          <Button type='submit' disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  )
}
