import React from 'react'
import { fireEvent, getByTestId, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MyForm } from './SimpleForm'

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  const { getByLabelText, getByRole, getByTestId } = render(
    <MyForm onSubmit={handleSubmit} />
  )

  userEvent.type(getByLabelText(/first name/i), 'John')
  userEvent.type(getByLabelText(/last name/i), 'Dee')
  userEvent.type(getByLabelText(/email/i), 'john.dee@someemail.com')

  // userEvent.click(getByRole('button', { name: /Submit/i }))
  fireEvent.submit(getByTestId('form'))

  waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee'
    })
  )
})
