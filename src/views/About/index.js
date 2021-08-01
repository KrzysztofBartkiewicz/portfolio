import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import SectionHeading from '../../components/SectionHeading';
import AnimatedText from '../../components/AnimatedText';
import { sectionTypes } from '../../helpers';
import { StyledAbout, StyledAboutHeading } from './StyledAbout';
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
      </StyledAboutHeading>

      <SpiningAnim />
    </StyledAbout>
  );
};

export default About;
