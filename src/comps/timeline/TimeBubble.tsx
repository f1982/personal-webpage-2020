import React from 'react';
import styled from 'styled-components';

const WrapperBase = styled.time`
    margin: 1rem 1rem;
    background: #cbfff3;
    padding: 0.5rem;
    border-radius: 6px;
    text-align: center;
    font-weight: 900;
    color: #30605b;
    position: relative;
    &:before {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
    }
    &:hover {
        color: #666;
    }
`;

const WrapperRight = styled(WrapperBase)`
    &:before {
        border-left: 10px solid #cbfff3;
        border-right: 10px solid transparent;
        border-top: 10px solid #cbfff3;
        border-bottom: 10px solid transparent;
        right: -19px;
        top: 6px;
    }
`;

const WrapperLeft = styled(WrapperBase)`
    &:before {
        border-left: 10px solid transparent;
        border-right: 10px solid #cbfff3;
        border-top: 10px solid #cbfff3;
        border-bottom: 10px solid transparent;
        left: -19px;
        top: 6px;
    }
`;

interface TimeBubbleType {
    direction?: string;
    children?: string;
}

const initialProps: TimeBubbleType = {
    direction: 'left',
    children: ''
};

const TimeBubble = (props: TimeBubbleType = initialProps) => {
    const { direction } = props;
    return (
        <>
            {direction === 'right' ? (
                <WrapperRight>
                    <span>{props.children}</span>
                </WrapperRight>
            ) : (
                    <WrapperLeft>
                        <span>{props.children}</span>
                    </WrapperLeft>
                )}
        </>
    );
};

export default TimeBubble;
