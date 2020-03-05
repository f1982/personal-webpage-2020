import React from 'react';
import styled from 'styled-components';

const GSection = styled.section`
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
`;

const GGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr 3fr 1fr 2fr 3fr;
    grid-template-rows: 2fr 2fr 1fr 1fr 2fr 2fr;
    gap: 1rem;
    width: 60rem;
    max-width: 100%;
`;

const GridSection = () => {
    return (
        <GSection>
            <GGrid>
                <h2>Maria Goeppert Mayer</h2>
                <div>
                    <time>1906</time> – <time>1972</time>
                </div>
                <div>
                    <p>
                        Maria Goeppert Mayer was a German-born American theoretical physicist, and Nobel laureate in
                        Physics for proposing the nuclear shell model of the atomic nucleus. She was the second woman to
                        win a Nobel Prize in physics In 1986, the Maria Goeppert-Mayer Award for early-career women
                        physicists was established in her honor.
                    </p>
                    <p>
                        She developed a mathematical model for the structure of nuclear shells, for which she was
                        awarded the Nobel Prize in Physics in 1963, which she shared with J. Hans D. Jensen and Eugene
                        Wigner.
                    </p>
                </div>
            </GGrid>
        </GSection>
    );
};

export default GridSection;
