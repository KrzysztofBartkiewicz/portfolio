import React from 'react';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import { StyledHome, StyledInner } from './StyledHome';

const Home = ({ id }) => {
  const homeId = 'home';

  return (
    <StyledHome id={homeId}>
      <StyledInner>
        <Heading>
          <AnimatedText slideUp={id !== homeId} slideDown={id === homeId}>
            Hi there, I'm
          </AnimatedText>
        </Heading>
        <Heading headingType="h1">
          <AnimatedText slideUp={id !== homeId} slideDown={id === homeId}>
            Krzysztof Bartkiewicz
          </AnimatedText>
        </Heading>
      </StyledInner>
    </StyledHome>
  );
};

export default Home;
