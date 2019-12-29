import React from 'react'
import styled from 'styled-components'
import { ProjectObject } from '../interfaces'

const Wrapper = styled.div`
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

const Inner = styled.div`
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
interface PopupProps {
    id: string,
    itemData?: ProjectObject,
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
        <Wrapper>
            <Inner>
                <h1>{props.itemData && props.itemData.title}</h1>
                <button onClick={buttonHandler}>close me</button>
            </Inner>
        </Wrapper>
    )
}

export {
    Popup
}