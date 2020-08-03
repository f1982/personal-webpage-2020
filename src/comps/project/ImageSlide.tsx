import React from 'react';
import styled from 'styled-components';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const SlideImage = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
`;

const Slider = (props: { image: string }) => {
    return (
        <SlideImage
            style={{
                backgroundImage: `url("${props.image}")`
            }}></SlideImage>
    );
};

const SliderWrapper = styled.div`
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    background-color: #ccc;
`;

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const LeftArrow = styled.a`
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 99;
`;

const RightArrow = styled.a`
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 99;
`;

interface ImageSlideProp {
    width: any;
    height: any;
    images: Array<string>;
}

const ImageSlide = (props: ImageSlideProp) => {
    const [current, setCurrent] = React.useState<number>(0);

    const goNext = (evt: React.MouseEvent | React.TouchEvent) => {
        // console.log('goNext');
        if (current < props.images.length - 1) {
            setCurrent(current + 1);
        }
    };

    const goPrevious = (evt: React.MouseEvent | React.TouchEvent) => {
        // console.log('goPrevious');
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const getSliderWidth = () => {
        if (document.querySelector('.testslider')) {
            const div: HTMLDivElement = document.querySelector('.testslider') as HTMLDivElement;
            return div.clientWidth;
        } else {
            return 500;
        }
    };

    return (
        <SliderWrapper
            id='test'
            className='testslider'
            style={{
                width: `${props.width}`,
                height: `${props.height}`
            }}>
            <SliderContainer
                style={{
                    transform: `translateX(${-1 * current * getSliderWidth()}px)`,
                    transition: `transform cubic-bezier(0.42, 0, 0.58, 1) 0.25s`
                }}>
                {props.images.map((item: string, index: number) => {
                    return <Slider key={index} image={item}></Slider>;
                })}
            </SliderContainer>
            {props.images.length > 1 ? (
                <>
                    <LeftArrow onClick={goPrevious}>
                        <FaArrowCircleLeft size='48' color='#666' style={{ transform: `translateY(-50%)` }} />
                    </LeftArrow>
                    <RightArrow onClick={goNext}>
                        <FaArrowCircleRight size='48' color='#666' style={{ transform: `translateY(-50%)` }} />
                    </RightArrow>
                </>
            ) : null}

            {/* <DisplayInfo>{current}</DisplayInfo> */}
        </SliderWrapper>
    );
};

export { Slider, ImageSlide };
