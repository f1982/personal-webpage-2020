/**
 * How to write expect
 * https://jestjs.io/docs/en/expect
 *
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SkillItem } from './SkillItem';

describe('skill item', () => {
    it('should display name', () => {
        const { getByText } = render(<SkillItem title={'hello'} level={2} />)
        expect(getByText('hello')).toBeInTheDocument();
    });
});
