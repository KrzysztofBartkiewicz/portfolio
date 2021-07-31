import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import Button from '../../components/Button';
import Link from '../../components/Link';
import ScrollInfo from '../../components/ScrollInfo';
import { buttonTypes, sectionTypes, contactData } from '../../helpers';
import {
  StyledBottomWrapper,
  StyledHome,
  StyledInner,
  StyledContactLinks,
  StyledSectionLinks,
  StyledGreeting,
} from './StyledHome';

const Home = () => {
  const { handleGoToPage, activeSection } = useContext(AppContext);
  const homeId = sectionTypes.home;

  const sectionId = activeSection ? activeSection.id : null;

  const renderInnerWrapper = () => (
    <StyledInner>
      <StyledGreeting>
        <AnimatedText
          slideUp={sectionId !== homeId}
          slideDown={sectionId === homeId}
        >
          Hi there, I'm
        </AnimatedText>
      </StyledGreeting>
      <Heading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== homeId}
          slideDown={sectionId === homeId}
        >
          Krzysztof Bartkiewicz.
        </AnimatedText>
      </Heading>
    </StyledInner>
  );

  const renderBottomWrapper = () => (
    <StyledBottomWrapper>
      <StyledSectionLinks>
        <Button
          buttonType={buttonTypes.text}
          onClickFn={() => handleGoToPage(sectionTypes.projects)}
        >
          Projects
        </Button>
        <Button
          buttonType={buttonTypes.text}
          onClickFn={() => handleGoToPage(sectionTypes.contact)}
        >
          Contact
        </Button>
      </StyledSectionLinks>
      <StyledContactLinks>
        <Link href={`mailto:${contactData.email}`}>
          {`${contactData.email}`}
        </Link>
        <Link href={`tel:${contactData.phone}`}>{`${contactData.phone}`}</Link>
      </StyledContactLinks>
    </StyledBottomWrapper>
  );

  return (
    <StyledHome id={homeId}>
      {renderInnerWrapper()}
      <ScrollInfo />
      {renderBottomWrapper()}
    </StyledHome>
  );
};

export default Home;
