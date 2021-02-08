import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MyForm } from './SimpleForm'

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  const { getByLabelText, getByRole } = render(
    <MyForm onSubmit={handleSubmit} />
  )

  userEvent.type(getByLabelText(/first name/i), 'John')
  userEvent.type(getByLabelText(/last name/i), 'Dee')
  userEvent.type(getByLabelText(/email/i), 'john.dee@someemail.com')

  userEvent.click(getByRole('button', { name: /submit/i }))

  await waitFor(() =>
    // waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee'
    })
  )
})
