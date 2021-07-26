import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { buttonTypes, sectionTypes, contactData } from '../../helpers';
import {
  StyledBottomWrapper,
  StyledHome,
  StyledInner,
  StyledContactLinks,
  StyledSectionLinks,
} from './StyledHome';
import ScrollInfo from '../../components/ScrollInfo';

const Home = ({ id }) => {
  const { handleGoToPage } = useContext(AppContext);
  const homeId = sectionTypes.home;

  const renderInnerWrapper = () => (
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

      {renderBottomWrapper()}
    </StyledHome>
  );
};

export default Home;
