import React from 'react'
import styled from 'styled-components'
import { ProjectObject } from '../interfaces'

interface ProjectDetailProp {
    itemData: ProjectObject
}

const ProjectDetail = (props: ProjectDetailProp) => {
    return (
        <>
            <h1>{props.itemData.title}</h1>
            <div><span>{props.itemData.start}</span><span>{props.itemData.end}</span></div>
            <p>{props.itemData.responsibility}</p>
            <p>{props.itemData.description}</p>
            <div>{props.itemData.tech}</div>
            <img src={props.itemData.cover} />
            {
                props.itemData.images
                    ?
                    props.itemData.images.map((item,index) => {
                        return (<img key={index} src={item} />);
                    })
                    : null
            }

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