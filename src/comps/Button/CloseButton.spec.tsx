import React from 'react';
import { fireEvent, getAllByRole, getByRole, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CloseButton from './CloseButton';

describe('test close button', () => {
  test('it applies default styles', () => {
    const { getByText } = render(<CloseButton />);
  });
});
