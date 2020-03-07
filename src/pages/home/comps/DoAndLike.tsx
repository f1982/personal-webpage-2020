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
                <div>
                    <h5>What I Do?</h5>
                </div>
                <div>
                    <p>{props.whatIDo}</p>
                </div>
            </VerticalContainer>
            <VerticalContainer>
                <div>
                    <h5>Who I Like?</h5>
                </div>
                <div>
                    <p>{props.whatILike}</p>
                </div>
            </VerticalContainer>
        </Wrapper>
    );
};

export default DoAndLike;
