import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { FaWindowClose } from 'react-icons/fa';
import { ProjectObject } from '../interfaces'


const FRAME_MARGIN = "10%";

const Mask = styled(animated.div)`
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
    left: ${FRAME_MARGIN};
    right: ${FRAME_MARGIN};
    top: ${FRAME_MARGIN};
    bottom: ${FRAME_MARGIN};
    margin: auto;
    background: white;
    /* border-radius: 1rem; */
    box-shadow: ${props => props.theme.shadow};
`

const Frame = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    /* overflow: scroll;
    white-space: nowrap; */
`

const Border = styled.div`
    padding: 2rem;
`

//icons
const WindowCloseIcon = styled(FaWindowClose)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`

const WindowCloseLink = styled.a`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

interface PopupProps {
    id: string,
    content: JSX.Element,
    closeHandler?: Function
}

const Popup = (props: PopupProps) => {
    const [close, setClose] = React.useState(false);

    const sprops = useSpring({ opacity: 1, from: { opacity: 0 } })

    const buttonHandler = (event: React.MouseEvent) => {
        if (props.closeHandler) {
            props.closeHandler();
        }
    }
    return (
        // <animated.div style={sprops}>
            <Mask style={sprops}>
                <Wrapper>
                    <Frame>
                        <WindowCloseLink onClick={buttonHandler}>
                            <WindowCloseIcon size="40" />
                        </WindowCloseLink>
                        <Border>
                            {props.content}
                        </Border>
                    </Frame>
                </Wrapper>
            </Mask>
        // </animated.div>
    )
}

export {
    Popup
}