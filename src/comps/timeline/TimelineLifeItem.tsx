import React from 'react';
import styled from 'styled-components';
import { TimelineLifeObject } from '../../types/interfaces';
import ProgressiveImage from '../common/ProgressiveImage';

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(#efc854, #efc854) no-repeat;
    background-size: 17px 100%;
    background-position: 50% 50%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        background: none;
        margin-bottom: 1rem;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: linear-gradient(#f5c02e, #f5c02e) no-repeat;
    background-size: 17px 100%;
    background-position: 50% 50%;
    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        background: none;
        margin-bottom: 1rem;
    }
`;

const LeftVertical = styled.div`
    width: 60%;
    text-align: right;
    box-sizing: border-box;
    h5 {
        margin: 0 0;
    }
    b {
        margin: 0 0;
    }
    p {
        margin: 0 0;
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const MiddleVertical = styled.div`
    width: 200px;
    /* background-color: #50e3c2; */
    color: #fff;
    margin: 0 1rem;
    padding-top: 1rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
    }
`;

const TimeHint = styled.div`
    font-size: 3rem;
    font-weight: bold;
    background-color: #f5c02e;
    /* border: 2px solid #39dbfa; */
    box-shadow: 6px 2px #39dbfa;
    border-radius: 40px;
    padding: 1rem 1rem;
`;

const RightVertical = styled.div`
    width: 50%;
    img {
        border-radius: 50%;
        width: 80px;
    }
`;

interface LifeItemProp {
    dir?: string;
    itemData?: TimelineLifeObject;
}

const Upper = () => {
    return (
        <div
            style={{
                height: `48px`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionX: '50%',
                backgroundImage: `url('${process.env.PUBLIC_URL + 'static/images/timeline-current.png'}')`
            }}>
            {/* <img src={TimelineCurrent} /> */}
        </div>
    );
};

const Lower = () => {
    return (
        <div
            style={{
                height: `88px`,
                backgroundRepeat: `no-repeat`,
                backgroundPositionX: '50%',
                backgroundImage: `url('${process.env.PUBLIC_URL + 'static/images/timeline-starter.png'}')`
            }}></div>
    );
};

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    > img {
        margin-bottom: 0.5rem;
        filter: blur(1px);
        transition: opacity ease-in 1000ms;
    }
`;

const TimelineItem = (props: LifeItemProp) => {
    console.log('props', props);
    const { dir, itemData } = props;
    const { start, title, subtitle, description, cover, images } = itemData as TimelineLifeObject;
    return (
        <>
            {dir === 'left' ? (
                <LeftWrapper>
                    <LeftVertical>
                        <h5>{title}</h5>
                        <i>{subtitle}</i>
                        <p>{description}</p>
                        <ImageContainer>
                            {images && images.length > 0
                                ? images.map((image, index) => {
                                    return <ProgressiveImage key={index} src={image} />;
                                })
                                : null}
                        </ImageContainer>
                    </LeftVertical>
                    <MiddleVertical style={{ textAlign: 'left' }}>
                        <TimeHint>
                            <i>{start}</i>
                        </TimeHint>
                    </MiddleVertical>
                    <RightVertical>
                        {cover ? (
                            <img
                                src={cover}
                                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                onLoad={() => { }}
                                alt={title}
                            />
                        ) : null}
                    </RightVertical>
                </LeftWrapper>
            ) : (
                    <RightWrapper>
                        <LeftVertical style={{ textAlign: 'left' }}>
                            <h5>{title}</h5>
                            <i>{subtitle}</i>
                            <p>{description}</p>
                            <ImageContainer>
                                {images && images.length > 0
                                    ? images.map((image, index) => {
                                        return <ProgressiveImage key={index} src={image} />;
                                    })
                                    : null}
                            </ImageContainer>
                        </LeftVertical>
                        <MiddleVertical style={{ textAlign: 'right' }}>
                            <TimeHint>
                                <i>{start}</i>
                            </TimeHint>
                        </MiddleVertical>
                        <RightVertical style={{ textAlign: 'right' }}>
                            {cover ? (
                                <img
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    src={cover}
                                    alt={title}
                                />
                            ) : null}
                        </RightVertical>
                    </RightWrapper>
                )}
        </>
    );
};

export default TimelineItem;
export { Upper, Lower };
