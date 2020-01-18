import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaWindowClose } from 'react-icons/fa';

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

const WindowCloseLink = styled.a`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

interface PopupProps {
    id: string;
    content: JSX.Element;
    closeHandler?: Function;
}

const showDuration = 200;

const Popup = (popupProps: PopupProps) => {
    const [close, setClose] = React.useState(false);

    // const [props, set] = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 200 } })
    const [props, set] = useSpring(() => ({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: showDuration }
    }));
    // set({ opacity: 1 })
    // React.useEffect(() => {
    //     set({ opacity: 1 })
    // }, []);

    const buttonHandler = (event: React.MouseEvent) => {
        set({ opacity: 0 });
        setTimeout(() => {
            if (popupProps.closeHandler) {
                popupProps.closeHandler();
            }
        }, showDuration);
    };
    return (
        <Mask style={props}>
            <Wrapper>
                <Frame>
                    <WindowCloseLink onClick={buttonHandler}>
                        <WindowCloseIcon size='40' />
                    </WindowCloseLink>
                    <Border>{popupProps.content}</Border>
                </Frame>
            </Wrapper>
        </Mask>
    );
};

export { Popup };
