import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import SectionHeading from '../../components/SectionHeading';
import AnimatedText from '../../components/AnimatedText';
import { sectionTypes } from '../../helpers';
import {
  StyledAbout,
  StyledAboutHeading,
  StyledSubHeading,
} from './StyledAbout';
import SpiningAnim from '../../components/SpiningAnim';

const About = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledAbout id={sectionTypes.about}>
      <SectionHeading sectionType={sectionTypes.about} sectionId={sectionId}>
        About
      </SectionHeading>
      <StyledAboutHeading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== sectionTypes.about}
          slideDown={sectionId === sectionTypes.about}
        >
          About me<span>.</span>
        </AnimatedText>
        <StyledSubHeading
          slideUp={sectionId !== sectionTypes.about}
          slideDown={sectionId === sectionTypes.about}
          size="l"
          weight="bold"
        >
          I specialise in create apps in <span>React</span>. I like style them
          using Styled Components
          <br />
          but <span>Sass</span> and BEM methodology are no secret for me. I know{' '}
          <span>ES6</span> standard
          <br />
          and use it in every project. For tracking changes I use{' '}
          <span>GIT</span> which i understand
          <br />
          on basic level. I love to learn
          new things like <span>Redux</span> which I learned lately.
        </StyledSubHeading>
      </StyledAboutHeading>

      <SpiningAnim />
    </StyledAbout>
  );
};

export default About;
