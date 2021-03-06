import React, { useState } from 'react';
import styled from 'styled-components';
import loading from './loading.module.css';
const Wrapper = styled.div`
    position: relative;
    min-width: 265px;
    min-height: 150px;

    img {
        width: 100%;
        height: 100%;
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

const ProgressiveImage = (props: { src: string; width?: string; height?: string; radius?: String; alt?: string }) => {
    const { src: imageURL, width = '100%', height = 'auto', radius = '16px', alt = 'progressive image' } = props;
    const [loadingState, sestLoadingState] = useState('loading');

    const handleImageLoaded = () => {
        sestLoadingState('loaded');
    };

    const handleImageErrored = () => {
        sestLoadingState('error');
    };

    return (
        <Wrapper style={{ width: width, height: height }}>
            <img
                src={imageURL}
                alt={alt}
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
