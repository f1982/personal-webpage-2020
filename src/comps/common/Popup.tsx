import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import './animation.css';

const ScreenSmallWidth: string = `768px`;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
`;
const Mask = styled(animated.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
    position: absolute;
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 2rem;
    box-shadow: ${(props) => props.theme.shadow};
    @media screen and (max-width: ${ScreenSmallWidth}) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

const Border = styled.div`
    padding: 0 2rem 1rem 2rem;
    height: 100%;
    overflow-y: scroll;
    @media screen and (max-width: ${ScreenSmallWidth}) {
        padding: 0.5rem;
    }
`;

//icons
const WindowCloseIcon = styled(FaTimes)`
    color: #ffcc00;
    vertical-align: middle;
    margin-right: 4px;
`;

const TitleBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

const Footer = styled.div`
    height: 1rem;
`;
const CloseButton = styled.div`
    background-color: rgb(0, 0, 0, 0);
`;

interface PopupProps {
    id: string;
    children: JSX.Element;
    closeButton?: JSX.Element;
    containerWidth?: string;
    containerHeight?: string;
    roundCorner?: boolean;
    closeHandler?: Function;
}

const showDuration = 0;

const Popup = (popupProps: PopupProps) => {
    const { containerWidth = '70%', containerHeight = '90%', roundCorner = true } = popupProps;
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
            <Container
                style={{ width: containerWidth, height: containerHeight, borderRadius: roundCorner ? `20px` : `0` }}>
                <TitleBar>
                    <span></span>
                    <CloseButton onClick={buttonHandler}>
                        {popupProps.closeButton === undefined ? <WindowCloseIcon size='40' /> : popupProps.closeButton}
                    </CloseButton>
                </TitleBar>
                <Border>{popupProps.children}</Border>
                <Footer></Footer>
            </Container>
            <Mask style={props} onClick={buttonHandler}></Mask>
        </Wrapper>
    );
};

export { Popup };
