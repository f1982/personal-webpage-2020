import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaWindowClose } from 'react-icons/fa';
import '../assets/styles/animation.css';

const FRAME_MARGIN = '10%';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* position: relative; */
`;
const Mask = styled(animated.div)`
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
    position: absolute;
    z-index: 1000;
    width: 80%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    background: white;
    overflow-y: scroll;
    /* border-radius: 1rem; */
    box-shadow: ${props => props.theme.shadow};
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Frame = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Border = styled.div`
    padding: 2rem;
    @media screen and (max-width: 600px) {
        overflow-y: scroll;
    }
`;

//icons
const WindowCloseIcon = styled(FaWindowClose)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`;

const CloseButtonContainer = styled.div`
    display: inline;
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

const CloseButton = styled.div`
    background-color: rgb(0, 0, 0, 0);
`;

interface PopupProps {
    id: string;
    children: JSX.Element;
    closeButton?: JSX.Element;
    closeHandler?: Function;
}

const showDuration = 0;

const Popup = (popupProps: PopupProps) => {
    // console.log('popupProps', popupProps);
    // console.log('popupProps.closeButton:', popupProps.closeButton);

    // const [animateClassName, setAnimateClassName] = useState('bounce-in-top');
    const [props, set] = useSpring(() => ({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: showDuration }
    }));

    const buttonHandler = (event: React.MouseEvent) => {
        set({ opacity: 0 });
        setTimeout(() => {
            if (popupProps.closeHandler) {
                // setAnimateClassName('bounce-out-top');
                popupProps.closeHandler();
            }
        }, showDuration);
    };
    return (
        <Wrapper>
            <Container>
                <Frame>
                    <CloseButtonContainer>
                        <CloseButton onClick={buttonHandler}>
                            {popupProps.closeButton === undefined ? (
                                <WindowCloseIcon size='40' />
                            ) : (
                                popupProps.closeButton
                            )}
                        </CloseButton>
                    </CloseButtonContainer>
                    <Border>{popupProps.children}</Border>
                </Frame>
            </Container>
            <Mask style={props} onClick={buttonHandler}></Mask>
        </Wrapper>
    );
};

export { Popup };
