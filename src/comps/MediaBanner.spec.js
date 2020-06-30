import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import MediaBanner from './MediaBanner';

const Button = styled.button`
    color: red;
    @media (max-width: 640px) {
        &:hover {
            color: green;
        }
    }
`;

test('it works', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
    expect(tree).toHaveStyleRule('color', 'green', {
        media: '(max-width: 640px)',
        modifier: ':hover'
    });
});

test('match snapshot ', () => {
    const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('display correctly', () => {
    const tree = renderer.create(<MediaBanner title='hello' />).toJSON();
    console.log('tree', tree);
    expect(tree).toHaveStyleRule('position', 'relative');
    expect(tree).toHaveStyleRule('height', '16rem');
    expect(tree).toHaveStyleRule('height', '11rem', {
        media: 'screen and (max-width: 768px)'
    });
});
