import React from 'react'
import styled from 'styled-components'
import { FaCalendarTimes, FaStackExchange, FaChartArea } from 'react-icons/fa';
import { ProjectObject } from '../interfaces'
import { TechnologyStackItem } from './TechnologyStack'
import { ImageSlide } from './ImageSlide'

interface ProjectDetailProp {
    itemData: ProjectObject
}

const IconBase = styled.i`
    vertical-align: middle;
`

const ChartArea = styled(FaChartArea)`
    vertical-align: middle;
`

const ProjectDetail = (props: ProjectDetailProp) => {
    return (
        <>
            <h4>{props.itemData.title}</h4>
            <div><FaCalendarTimes /> <span>{props.itemData.start}</span> - <span>{props.itemData.end}</span></div>
            <div><h5><ChartArea /> Description</h5></div>
            <p>{props.itemData.description}</p>
            <h5>Responsibility</h5>
            <p>{props.itemData.responsibility}</p>
            {/* Tech stack simple way to show */}
            {/* <div>{props.itemData.tech}</div> */}
            {/* Tech stack duplicated way to show */}
            <div><FaStackExchange />
                {
                    props.itemData.tech.split(',').map((item, index) => {
                        return (<TechnologyStackItem key={index} technology={item} />)
                    })
                }
            </div>
            {/* <img src={props.itemData.cover} /> */}
            <ImageSlide width="100%" height="300px" images={props.itemData.images}></ImageSlide>

            {/* {
                props.itemData.images
                    ?
                    props.itemData.images.map((item, index) => {
                        return (<img key={index} src={item} />);
                    })
                    : null
            } */}

            {
                props.itemData.link
                    ?
                    <div><a href={props.itemData.link} target="_blank">Detail</a> </div>
                    : null
            }
        </>
    )
}

export {
    ProjectDetail
}