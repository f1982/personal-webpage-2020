import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

interface IHobbyDetailProp {
    title: string;
    detail: any;
}
const HobbyDetail: React.FC<IHobbyDetailProp> = (
    props: IHobbyDetailProp = {
        title: 'defaultTitle',
        detail: null
    }
) => {
    let history = useHistory();

    return (
        <>
            <h3>{props.title}</h3>
            <section>
                <p>Introduction</p>
            </section>
            <section>
                <img src='' />
            </section>

            <button
                onClick={() => {
                    history.goBack();
                }}>
                CLOSE
            </button>
        </>
    );
};

export default HobbyDetail;
