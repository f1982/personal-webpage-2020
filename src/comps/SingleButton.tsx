import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span``;
const InnterButton = styled.button`
    width: 140px;
    height: 45px;
    font-size: 16px;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #eee;
    background-color: #50e3c2;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    margin: 1.5rem 0;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #2ee59d;
        box-shadow: 0px 16px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
    }
`;

interface ButtonProp {
    children: string;
    callback?: Function;
}
const SingleButton = (props: ButtonProp) => {
    return (
        <Wrapper>
            <InnterButton
                onClick={() => {
                    void (props.callback ? props.callback() : null);
                }}>
                {props.children}
            </InnterButton>
        </Wrapper>
    );
};

export default SingleButton;
