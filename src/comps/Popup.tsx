import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaWindowClose } from 'react-icons/fa';
import '../assets/styles/animation.css';

const FRAME_MARGIN = '10%';

const Mask = styled(animated.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
    position: absolute;
    left: ${FRAME_MARGIN};
    right: ${FRAME_MARGIN};
    top: ${FRAME_MARGIN};
    bottom: ${FRAME_MARGIN};
    margin: auto;
    background: white;
    overflow-y: scroll;
    /* border-radius: 1rem; */
    box-shadow: ${props => props.theme.shadow};
    @media screen and (max-width: 600px) {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
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
    content: JSX.Element;
    closeButton?: JSX.Element;
    closeHandler?: Function;
}

const showDuration = 200;

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
        <Mask style={props}>
            {/* <Wrapper className={animateClassName}> */}
            <Wrapper>
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
                    <Border>{popupProps.content}</Border>
                </Frame>
            </Wrapper>
        </Mask>
    );
};

export { Popup };
