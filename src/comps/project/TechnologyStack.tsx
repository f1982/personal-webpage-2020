import React from 'react';
import styled from 'styled-components';

const TSItem = styled.span`
    font-family: '';
    font-size: 12px;
    border: 2px solid #333;
    margin: 0 0.5rem;
    padding: 0.3rem;
    background-color: #fff;
    border-radius: 0.5rem;
    list-style-type: none;
`;

const ItemLink = styled.a`
    a {
        margin-left: 20px;
        padding: 0 10px 0 12px;
        background: #0089e0;
        color: #fff;
        text-decoration: none;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    a:before {
        content: '';
        float: left;
        position: absolute;
        top: 0;
        left: -12px;
        width: 0;
        height: 0;
        border-color: transparent #0089e0 transparent transparent;
        border-style: solid;
        border-width: 12px 12px 14px 0;
    }
    a:after {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        float: left;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #fff;
        box-shadow: -1px -1px 2px #004977;
    }

    a:hover {
        background: #555;
    }
    a:hover:before {
        border-color: transparent #555 transparent transparent;
    }
`;


interface TechnologyStackItemProp {
    technology: string;
}

const TechnologyStackItem = (props: TechnologyStackItemProp) => {
    return <TSItem>{props.technology}</TSItem>;
};

export { TechnologyStackItem };
