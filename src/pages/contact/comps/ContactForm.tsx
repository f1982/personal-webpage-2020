import {
  InjectedFormikProps,
  withFormik,
  ErrorMessage,
  useFormikContext
} from 'formik'
import styled from 'styled-components'
import * as React from 'react'
import * as Yup from 'yup'
import { useState } from 'react'
import { SingleButton } from '../../../comps/Button'
import { Prompt } from 'react-router'
import RouteLeavingGuard from '../../../comps/Popup/RouteLeavingGuard'
const FMForm = styled.form`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const FMLabel = styled.label`
  width: 100%;
  text-align: left;
  line-height: 1.5;
`

const FMInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`
const FMInputWrapperHalf = styled(FMInputWrapper)`
  width: 46%;
`

const FMInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1.5rem;
  color: #333333;
  line-height: 1.2;
  padding: 0.6rem 0.8rem;
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder {
    color: #ccc;
  }
`

const FMTextarea = styled.textarea`
  width: 100%;
  height: 235px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px;
`

const FMError = styled(ErrorMessage)`
  color: #ffcc00;
  text-align: left;
`

const FMButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #5995ef;
  color: #fff;
  border: 0px;
  font-size: 1rem;
  border-radius: 3px;
  &:disabled {
    background-color: #ccc;
  }
`

interface FormValues {
  firstName: string
  lastName: string
  email: string
  subject: string
  content: string
}

interface FormProps {
  firstName?: string
  lastName?: string
  email?: string
  subject?: string
  content?: string
}

interface PromptIfDirtyProp {
  history: any
}
const PromptIfDirty = () => {
  const formik = useFormikContext()
  return (
    <Prompt
      when={formik.dirty && formik.submitCount === 0}
      message='Are you sure you want to leave? You have with unsaved changes.'
    />
  )
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

const InnerForm: React.FunctionComponent<InjectedFormikProps<
  FormProps,
  FormValues
>> = (props: any) => {
  const [submitted, setSubmitted] = useState(false)

  // console.log(props.form.status);
  return (
    <>
      {submitted === false ? (
        <FMForm onSubmit={props.handleSubmit}>
          <PromptIfDirty2 />
          <FMLabel htmlFor='firstName'>Your Name</FMLabel>
          <FMInputWrapperHalf>
            <FMInput
              id='firstName'
              type='text'
              onChange={props.handleChange}
              value={props.values.firstName}
              placeholder='Frist Name'
            />
            <FMError component='div' name='firstName' />
          </FMInputWrapperHalf>
          <FMInputWrapperHalf>
            <FMInput
              id='lastName'
              type='text'
              onChange={props.handleChange}
              value={props.values.lastName}
              placeholder='Last Name'
            />
            <FMError component='div' name='lastName' />
          </FMInputWrapperHalf>
          <FMLabel htmlFor='email'>Your Email</FMLabel>
          <FMInputWrapper>
            <FMInput
              id='email'
              type='text'
              onChange={props.handleChange}
              value={props.values.email}
            />
            <FMError component='div' name='email' />
          </FMInputWrapper>
          <FMLabel htmlFor='content'>Your Project</FMLabel>
          <FMInputWrapper>
            <FMTextarea
              id='content'
              onChange={props.handleChange}
              value={props.values.content}
            />
            <FMError component='div' name='content' />
          </FMInputWrapper>
          <FMButton type='submit' disabled={props.isSubmitting}>
            Submit
          </FMButton>
          <SingleButton>Submit</SingleButton>
        </FMForm>
      ) : (
        <p>Thank you for you feedback!</p>
      )}
    </>
  )
}
// hyper function map props and schema to form
const UserSearchForm = withFormik<FormProps, FormValues>({
  // inital values
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    content: ''
  }),
  // schema
  validationSchema: Yup.object().shape({
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
  }),
  handleSubmit: (values, { setSubmitting, setStatus }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setStatus({ submitted: true })
      setSubmitting(false)
    }, 1000)
  }
})(InnerForm)

export default UserSearchForm
