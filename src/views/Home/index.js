import React, { useContext, useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import Button from '../../components/Button';
import Link from '../../components/Link';
import ScrollInfo from '../../components/ScrollInfo';
import AppContext from '../../context/AppContext';
import { buttonTypes, sectionTypes, contactData } from '../../helpers';
import {
  StyledBottomWrapper,
  StyledHome,
  StyledInner,
  StyledContactLinks,
  StyledSectionLinks,
  StyledGreeting,
  StyledAboutMe,
  StyledAside,
} from './StyledHome';

const Home = () => {
  const { handleGoToPage, activeSection } = useContext(AppContext);
  const homeId = sectionTypes.home;

  const [sectionId, setSectionId] = useState(homeId);

  useEffect(() => {
    if (activeSection) {
      setSectionId(activeSection.id);
    }
  }, [activeSection]);

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
      <StyledAboutMe
        slideUp={sectionId !== homeId}
        slideDown={sectionId === homeId}
        size="l"
        weight="bold"
      >
        I'm aspiring frontend developer based in Olsztyn, Poland
      </StyledAboutMe>
      <ScrollInfo />
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
          onClickFn={() => handleGoToPage(sectionTypes.about)}
        >
          About
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

  const renderAside = () => (
    <StyledAside>
      <Link href={contactData.githubUrl} color="black">
        Gihub
      </Link>
      <Link href={contactData.linkedinUrl} color="black">
        LinkedIn
      </Link>
    </StyledAside>
  );

  return (
    <StyledHome id={homeId}>
      {renderInnerWrapper()}
      {renderAside()}
      {renderBottomWrapper()}
    </StyledHome>
  );
};

export default Home;
