import React from 'react'
import { render } from '@testing-library/react'
import CloseButton from './CloseButton'

describe('test close button', () => {
  test('it applies default styles', () => {
    const { getByRole } = render(
      <div>
        <CloseButton />
      </div>
    )
    const btn = getByRole('close-button')
    expect(btn).toHaveStyle('display: inline-block')
  })
})
