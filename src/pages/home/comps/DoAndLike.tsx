import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        margin: 0rem;
    }
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding: 1rem;
    text-align: left;
    & p {
        text-align: justify;
    }
`;

interface PropsType {
    whatIDo: string;
    whatILike: string;
}

const DoAndLike = (props: PropsType) => {
    // const [className, setClassName] = useState('hidden');

    const handleScroll = () => {
        // console.log('scrollTop:', document.documentElement.scrollTop);
        // if (document.documentElement.scrollTop > 25) {
        //     setClassName('show');
        // } else {
        //     setClassName('hidden');
        // }
    };

    useEffect(() => {
        return () => {
            //unsubscripe
        };
    }, []);

    return (
        <Wrapper>
            <VerticalContainer>
                <h5>What I Do?</h5>
                <p>{props.whatIDo}</p>
            </VerticalContainer>
            <VerticalContainer>
                <h5>Who I Like?</h5>
                <p>{props.whatILike}</p>
            </VerticalContainer>
        </Wrapper>
    );
};

export default DoAndLike;
