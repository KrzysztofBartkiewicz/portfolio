import React from 'react';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { buttonTypes } from '../../helpers';
import {
  StyledBottomWrapper,
  StyledHome,
  StyledInner,
  StyledContactLinks,
  StyledSectionLinks,
} from './StyledHome';

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
      <StyledBottomWrapper>
        <StyledSectionLinks>
          <Button buttonType={buttonTypes.text}>Projects</Button>
          <Button buttonType={buttonTypes.text}>Contact</Button>
        </StyledSectionLinks>
        <StyledContactLinks>
          <Link>bartkiewicz.krzysztof84@gmail.com</Link>
          <Link>+48 796 459 623</Link>
        </StyledContactLinks>
      </StyledBottomWrapper>
    </StyledHome>
  );
};

export default Home;
