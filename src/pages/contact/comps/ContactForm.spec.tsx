import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ContactForm } from './ContactForm'

test('rendering and submitting contact form', async () => {
  const handleSubmit = jest.fn()
  const { getByLabelText, getByRole } = render(
    <ContactForm onSubmit={handleSubmit} />
  )
  userEvent.type(getByLabelText(/first name/i), 'Tom')
  userEvent.type(getByLabelText(/Last Name/i), 'John')
  userEvent.type(getByLabelText(/Email/i), 'dummy@gmail.com')
  userEvent.type(getByLabelText(/Content/i), 'hello')

  userEvent.click(getByRole('button', { name: /Submit/i }))

  waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'dummy@gmail.com',
      firstName: 'Tom',
      lastName: 'John',
      content: 'hello'
    })
  })
})
