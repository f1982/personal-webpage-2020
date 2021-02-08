import React from 'react'
import { Formik, Field, FormikHelpers } from 'formik'
import { Button } from '@material-ui/core'

const sleep = (millisecond: number) =>
  new Promise(resolve => setTimeout(resolve, millisecond))

interface MyFormProps {
  onSubmit: (values: any, helper: any) => void
}
export const MyForm: React.FC<MyFormProps> = ({ onSubmit }: MyFormProps) => {
  const handleSubmit = async (values: any, helper: FormikHelpers<any>) => {
    // console.log('values', values)
    await sleep(500)
    onSubmit(values, helper)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        onSubmit={handleSubmit}>
        <form data-testid='form'>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='Jane' />

          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Doe' />

          <label htmlFor='email'>Email</label>
          <Field
            id='email'
            name='email'
            placeholder='jane@acme.com'
            type='email'
          />
          <button type='submit'>Submit</button>
          {/* <Button type='submit'>Submit</Button> */}
        </form>
      </Formik>
    </div>
  )
}
