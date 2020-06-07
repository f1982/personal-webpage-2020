import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span``;
const InnterButton = styled.button`
    padding: 0.75rem 2rem;
    /* letter-spacing: 2.5px; */
    font-weight: 500;
    color: #fff;
    border: 2px solid #fff;
    font-size: 1rem;
    background-color: #efc854;
    border-radius: 1.5rem;
    /* box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.1); */
    transition: all 0.3s ease 0s;
    cursor: pointer;
    /* border: none; */
    /* outline: none; */
    &:hover {
        /* background-color: #2ee59d; */
        box-shadow: 0px 16px 20px rgba(116, 221, 247, 0.4);
        color: #fff;
        transform: translateY(-1px);
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
