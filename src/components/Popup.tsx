import React from 'react'
import styled from 'styled-components'
import { ProjectObject } from '../interfaces'

const Mask = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`

const Wrapper = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.shadow};
`

const Frame = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const Border = styled.div`
    padding: 1rem;
`

const CloseButton = styled.button`
    position: absolute;
    right: 0px;
    top: 0px;
`;

interface PopupProps {
    id: string,
    content: any,
    closeHandler?: Function
}

const Popup = (props: PopupProps) => {
    const [close, setClose] = React.useState(false);
    const buttonHandler = (event: React.MouseEvent) => {
        // console.log('button click');
        if (props.closeHandler) {
            props.closeHandler();
        }
    }
    return (
        <Mask>
            <Wrapper>
                <Frame>
                    <CloseButton onClick={buttonHandler}>close me</CloseButton>
                    <Border>
                        {props.content}
                    </Border>
                </Frame>
            </Wrapper>
        </Mask>
    )
}

export {
    Popup
}