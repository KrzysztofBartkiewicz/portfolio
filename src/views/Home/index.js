import React, { forwardRef } from 'react';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import { StyledHome, StyledInner } from './StyledHome';

const Home = forwardRef(({ slideIn, slideOut }, ref) => {
  return (
    <StyledHome ref={ref} id="home">
      <StyledInner>
        <Heading>
          <AnimatedText slideUp={slideIn} slideDown={slideOut}>
            Hi there, I'm
          </AnimatedText>
        </Heading>
        <Heading headingType="h1">
          <AnimatedText slideUp={slideIn} slideDown={slideOut}>
            Krzysztof Bartkiewicz
          </AnimatedText>
        </Heading>
      </StyledInner>
    </StyledHome>
  );
});

export default Home;
