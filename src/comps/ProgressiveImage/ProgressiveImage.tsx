import React, { useState } from 'react';
import styles from './pi.module.css';

interface Props {
    imgURL: string;
    imgWidth: string;
    imgHeight: string;
    imgRadius: string;
    imgAlt: string;
}

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
        <div className={styles.wrapper} style={{ width: width, height: height }}>
            <img
                className={styles.innerImg}
                src={imageURL}
                alt={alt}
                style={{ borderRadius: `${radius}` }}
                onLoad={handleImageLoaded}
                onError={handleImageErrored}
            />
            <div className={styles.overlayer}>
                {loadingState === 'loading' ? (
                    <div className={styles.ldsEllipsis} >
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : null}
            </div>
        </div >
    );
};

export default ProgressiveImage;
