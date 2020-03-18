import React from 'react';
import styled from 'styled-components';

const ElementBlock = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr 3fr 1fr 2fr 3fr;
    grid-template-rows: 2fr 2fr 1fr 1fr 2fr 2fr;
    gap: 1rem;
    width: 60rem;
    max-width: 100%;
`;

const ElementDate = styled.div`
    font-size: 2rem;
    grid-column: 3 / 6;
    grid-row: 5;
`;

const ElementText = styled.div`
    grid-column: 4 / -1;
    grid-row: 1 / 5;
`;
const HobbyItemGird = () => {
    return (
        <section>
            <ElementBlock>
                <h2>Vera Rubin</h2>
                <ElementDate>
                    <time>1928</time> – <time>2016</time>
                </ElementDate>
                <ElementText>
                    <p>
                        Vera Rubin was an American astronomer who pioneered work on galaxy rotation rates. She uncovered
                        the discrepancy between the predicted angular motion of galaxies and the observed motion, by
                        studying galactic rotation curves. This phenomenon became known as the galaxy rotation problem,
                        and was evidence of the existence of dark matter. Although initially met with skepticism,
                        Rubin's results were confirmed over subsequent decades. Her legacy was described by The New York
                        Times as "ushering in a Copernican-scale change" in cosmological theory.
                    </p>
                </ElementText>
            </ElementBlock>
        </section>
    );
};

export default HobbyItemGird;
