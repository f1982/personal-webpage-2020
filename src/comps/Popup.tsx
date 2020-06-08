import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaWindowClose } from 'react-icons/fa';
import '../assets/styles/animation.css';

const FRAME_MARGIN = '10%';
const ScreenSmallWidth: string = `768px`;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    /* position: relative; */
    z-index: 9999;
`;
const Mask = styled(animated.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
    position: absolute;
    /* width: 80%; */
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    background: white;
    overflow: auto;
    border-radius: 2rem;
    box-shadow: ${(props) => props.theme.shadow};
    @media screen and (max-width: ${ScreenSmallWidth}) {
        width: 100%;
        height: 100vh;
        padding-top: 3rem;
        padding-bottom: 6rem;
    }
`;

const Frame = styled.div`
    position: relative;
    width: 100%;
    /* height: 100%; */
`;

const Border = styled.div`
    padding: 3.5rem;
    @media screen and (max-width: ${ScreenSmallWidth}) {
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

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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
