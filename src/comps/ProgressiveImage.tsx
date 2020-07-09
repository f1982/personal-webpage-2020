import React, { useState } from 'react';
import styled from 'styled-components';
import loading from '../assets/styles/loading.module.css';
const Wrapper = styled.div`
    position: relative;
    min-width: 265px;
    min-height: 150px;

    img {
        width: 100%;
        object-fit: cover;
        background-color: #ccc;
    }
    > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ProgressiveImage = (props: { src: string; radius?: String; alt?: string }) => {
    const { src: imageURL, radius = '16px' } = props;
    const [loadingState, sestLoadingState] = useState('loading');

    const handleImageLoaded = () => {
        sestLoadingState('loaded');
    };

    const handleImageErrored = () => {
        sestLoadingState('error');
    };

    return (
        <Wrapper>
            <img
                src={props.src}
                style={{ borderRadius: `${radius}` }}
                onLoad={handleImageLoaded}
                onError={handleImageErrored}
            />
            <div>
                {loadingState === 'loading' ? (
                    // <div className={loading['lds-ripple']}>
                    //     <div></div>
                    //     <div></div>
                    // </div>
                    <div className={loading['lds-ellipsis']}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : null}
            </div>
        </Wrapper>
    );
};
export default ProgressiveImage;
