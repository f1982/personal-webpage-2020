import React from 'react';
import renderer from 'react-test-renderer';
import styled, { css } from 'styled-components';

const Button = styled.button`
    color: red;
    border: 0.05em solid ${(props) => (props.transparent ? 'transparent' : 'black')};
    cursor: ${(props) => !props.disabled && 'pointer'};
    opacity: ${(props) => props.disabled && '.65'};
    @media (max-width: 640px) {
        &:hover {
            color: red;
        }
    }
`;

test('it applies default styles', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
    expect(tree).toHaveStyleRule('border', '0.05em solid black');
    expect(tree).toHaveStyleRule('cursor', 'pointer');
    expect(tree).not.toHaveStyleRule('opacity'); // equivalent of the following two
    expect(tree).not.toHaveStyleRule('opacity', expect.any(String));
    expect(tree).toHaveStyleRule('opacity', undefined);
});

test('it applies styles according to passed props', () => {
    const tree = renderer.create(<Button disabled transparent />).toJSON();
    expect(tree).toHaveStyleRule('border', expect.stringContaining('transparent'));
    expect(tree).toHaveStyleRule('cursor', undefined);
    expect(tree).toHaveStyleRule('opacity', '.65');
});

const Title = styled.h1`
    color: #ffcc00;
`;
const WrapperComponentStyle = styled.div`
    background-color: #fff;
    color: #fff;
    ${Title} {
        width: 200px;
    }
`;

const WrapperComponent = () => {
    return (
        <WrapperComponentStyle>
            <h1 style={{ color: '#ffcc00' }}>title</h1>
            <p>content</p>
        </WrapperComponentStyle>
    );
};

test('it applies styles according to passed props', () => {
    const tree = renderer.create(<WrapperComponent />).toJSON();
    // expect(tree).toHaveStyleRule('border', expect.stringContaining('transparent'));
    expect(tree).toHaveStyleRule('color', '#fff');
    //Find child element
    expect(tree).toHaveStyleRule('width', '200px', {
        modifier: css`
            ${Title}
        `
    });

    // expect(tree).toHaveStyleRule('opacity', '.65');
});

test('it works', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red', {
        media: '(max-width:640px)',
        modifier: ':hover'
    });
});
