import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes } from '../../helpers';
import { StyledAbout } from './StyledAbout';

const About = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledAbout id={sectionTypes.about}>
      <SectionHeading sectionType={sectionTypes.about} sectionId={sectionId}>
        About
      </SectionHeading>
    </StyledAbout>
  );
};

export default About;
