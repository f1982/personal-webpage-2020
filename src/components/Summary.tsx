import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const SummaryText = styled.p`
  padding: 0.5rem 2rem;
  text-align: justify;
`;

interface SummaryProps {}
const Summary = (props: SummaryProps) => {
  return (
    <Wrapper>
      <SummaryText>
        15+ years experience specializing in the front-end, mobile apps and
        casual game development. Able to effectively self-manage during
        independent projects as well as collaborate in a team setting. The video
        app which I deeply participated in has obtained over 100 million
        downloads. The registrations of personal websites has exceeded 2000 per
        day and the downloads of the games that designed and developed by myself
        independently has exceeded 1 million times. Super nerd with macOS, Linux
        and enjoy to automate and optimize the development process and
        productive workflow. Interest in problem-solving, learning new
        technologies and tools.
      </SummaryText>
    </Wrapper>
  );
};

export { Summary };
