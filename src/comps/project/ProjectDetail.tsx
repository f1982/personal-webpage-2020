import React from 'react';
import styled from 'styled-components';
import { FaCalendarTimes, FaStackOverflow, FaChartArea } from 'react-icons/fa';
import { ProjectObject } from '../../types/interfaces';
import { TechnologyStackItem } from './TechnologyStack';
import { ImageSlide } from '../ImageSlide';

const Wrapper = styled.div`
    text-align: left;
`;
const IconBase = styled.i`
    vertical-align: middle;
`;

const StackExchangeIcon = styled(FaStackOverflow)`
    vertical-align: middle;
`;
const StackRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ChartArea = styled(FaChartArea)`
    vertical-align: middle;
`;

interface ProjectDetailProp {
    itemData: ProjectObject;
}

const ProjectDetail = (props: ProjectDetailProp) => {
    return (
        <Wrapper>
            <h2>{props.itemData.title}</h2>
            <div>
                <FaCalendarTimes /> <span>{props.itemData.start}</span> - <span>{props.itemData.end}</span>
            </div>
            <StackRow>
                <StackExchangeIcon size='28' />
                {props.itemData.tech.split(',').map((item, index) => {
                    return <TechnologyStackItem key={index} technology={item} />;
                })}
            </StackRow>
            <div>
                <h5>
                    <ChartArea /> Description
                </h5>
            </div>
            <p>{props.itemData.description}</p>
            <h5>Responsibility</h5>
            <p>{props.itemData.responsibility}</p>
            {/* Tech stack simple way to show */}
            {/* <div>{props.itemData.tech}</div> */}
            {/* Tech stack duplicated way to show */}

            {/* <ImageSlide width='100%' height='300px' images={props.itemData.images}></ImageSlide>
            {props.itemData.link ? (
                <div>
                    <a href={props.itemData.link} target='_blank'>
                        Detail
                    </a>{' '}
                </div>
            ) : null} */}
        </Wrapper>
    );
};

export { ProjectDetail };