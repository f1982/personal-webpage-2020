import React, { useEffect, useRef, FunctionComponent } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Link, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import log from 'loglevel';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const delayTime = `300ms`;
const currentStyle = 'style1';
const Layout: any = {
    style1: {
        title: {
            row: `1/3`,
            column: `1/3`
        },
        date: {
            row: `3/4`,
            column: `2/5`
        },
        text: {
            row: `1 / 5`,
            column: `4 / -1`
        },
        image: {
            row: `4/-1`,
            column: ` 4/-1`
        }
    }
};

interface StyleProps {
    accent?: string;
}

const GSection = styled.section`
    min-height: 80vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
`;

const GGrid = styled.div<StyleProps>`
    @media (min-width: 758px) {
        display: grid;
        grid-template-columns: 3fr 2fr 1fr 3fr 1fr 2fr 3fr;
        grid-template-rows: 2fr 2fr 1fr 1fr 2fr 2fr;
        gap: 1rem;
        width: 60rem;
        max-width: 100%;
    }

    &::after {
        content: '';
        grid-area: 2 / 2 / -2 / -2;
        background-color: ${(props) => props.accent || `#ff0000`};
        z-index: -1;
    }

    > * {
        opacity: 0;
        /* Read element property of  --distance */
        transform: translate3d(var(--distance, -2rem), 0, 0);
        /* Read element property of  --delay */
        transition: opacity 700ms var(--delay, 0ms), transform 700ms var(--delay, 0ms);
    }

    &.is-visible {
        > * {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
`;

interface GridLayoutProps {
    row: string;
    column: string;
}

const GTitle = styled.h2<GridLayoutProps>`
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    text-align: right;
    margin-bottom: 1rem;
    border-right: 4px solid;
    padding-right: 1rem;
`;

const GDate = styled.div<GridLayoutProps>`
    font-size: 2rem;
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
`;

const GText = styled.div<GridLayoutProps>`
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
`;

const GImg = styled.img<GridLayoutProps>`
    grid-column: ${(props) => props.column};
    grid-row: ${(props) => props.row};
    border-radius: 0.375rem;
`;

interface SectionProps extends StyleProps {
    style?: string;
    bgColor?: string;
    title?: string;
    description?: string;
    comment?: string;
    date?: string;
    imageURL?: string;
}

const VideoMakingSection: React.FC<SectionProps> = ({
    bgColor,
    style = 'style1',
    title = 'Video Making',
    description = `Vera Rubin was an American astronomer who pioneered work on galaxy rotation rates. She uncovered
    the discrepancy between the predicted angular motion of galaxies and the observed motion, by
    studying galactic rotation curves. This phenomenon became known as the galaxy rotation problem,
    and was evidence of the existence of dark matter.`,
    comment = `Although initially met with skepticism,
    Rubin's results were confirmed over subsequent decades. Her legacy was described by The New York
    Times as "ushering in a Copernican-scale change" in cosmological theory`,
    date = '2020-2022',
    imageURL = 'https://picsum.photos/300/200'
}) => {
    let history = useHistory();
    let { path, url } = useRouteMatch();
    let query = useQuery();

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        //Setting of every child element
        //Get all children element
        const sectionChildren = (ref.current as any).children;
        for (let i = 0; i < sectionChildren.length; i++) {
            let el = sectionChildren[i];
            //set variable for every element inside the grid div
            el.style.setProperty('--delay', `${i * 200}ms`);
            el.style.setProperty('--distance', `${_.sample([-2, 2])}rem`);
        }
        //Intersection observer
        //Declare callback function
        const callback = (entries: any[]) => {
            entries.forEach((entry) => {
                const { intersectionRatio, target } = entry;
                log.info(intersectionRatio, target, '');
                if (intersectionRatio > 0.25) {
                    target.classList.add('is-visible');
                } else {
                    target.classList.remove('is-visible');
                }
            });
        };
        //Declare option
        const opt = {
            threshold: 0.25
        };
        //Declare intersection observer
        const io = new IntersectionObserver(callback, opt);
        //Observe element
        if (ref.current) {
            io.observe(ref.current as any);
        }

        return () => {
            //unobserve
            io.unobserve(ref.current as any);
        };
    }, [ref]);

    const currentStyle: any = Layout[style];
    return (
        <GSection>
            <GGrid ref={ref} accent={bgColor}>
                <GTitle row={currentStyle.title.row} column={currentStyle.title.column}>
                    {title}
                </GTitle>
                <GDate row={currentStyle.date.row} column={currentStyle.date.column}>
                    <time>{date}</time>
                </GDate>
                <GText row={currentStyle.text.row} column={currentStyle.text.column}>
                    <p>{description}</p>
                    <p>{comment}</p>
                </GText>
                {/* <GImg row={currentStyle.image.row} column={currentStyle.image.column} src={imageURL} /> */}
                <div style={{ gridRow: `4/-1`, gridColumn: `4/-1` }}>
                    <ul>
                        <li>http://www.youtube.com</li>
                        <li>http://www.youtube.com</li>
                        <li>http://www.youtube.com</li>
                        <li>http://www.youtube.com</li>
                    </ul>
                    <Link to={`${url}/making-video`}>Detail</Link>
                </div>
            </GGrid>
        </GSection>
    );
};

export default VideoMakingSection;
