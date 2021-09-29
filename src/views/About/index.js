import React, { useContext } from 'react';
import SectionHeading from '../../components/SectionHeading';
import SpiningAnim from '../../components/SpiningAnim';
import AnimatedText from '../../components/AnimatedText';
import AppContext from '../../context/AppContext';
import { sectionTypes } from '../../helpers';
import {
  StyledAbout,
  StyledAboutHeading,
  StyledES6Span,
  StyledGitSpan,
  StyledReactSpan,
  StyledReduxSpan,
  StyledSassSpan,
  StyledSubHeading,
  StyledDot,
  StyledTSSpan,
} from './StyledAbout';

const About = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledAbout id={sectionTypes.about}>
      <SectionHeading sectionType={sectionTypes.about}>About</SectionHeading>
      <StyledAboutHeading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== sectionTypes.about}
          slideDown={sectionId === sectionTypes.about}
        >
          About me<StyledDot>.</StyledDot>
        </AnimatedText>
        <StyledSubHeading
          slideUp={sectionId !== sectionTypes.about}
          slideDown={sectionId === sectionTypes.about}
          size="l"
          weight="bold"
        >
          I specialise in creating apps in{' '}
          <StyledReactSpan>React</StyledReactSpan>. I like style them using
          Styled Components
          <br />
          but <StyledSassSpan>Sass</StyledSassSpan> and BEM methodology are no
          secret for me. I know <StyledES6Span>ES6</StyledES6Span> standard
          <br />
          and use it in every project. For tracking changes I use{' '}
          <StyledGitSpan>GIT</StyledGitSpan> which i understand
          <br />
          on basic level. I love to learn new things like{' '}
          <StyledReduxSpan>Redux</StyledReduxSpan> or{' '}
          <StyledTSSpan>TypeScript</StyledTSSpan> which I have learned lately.
        </StyledSubHeading>
      </StyledAboutHeading>
      <SpiningAnim />
    </StyledAbout>
  );
};

export default About;
