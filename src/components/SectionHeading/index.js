import React, { useContext } from 'react';
import AnimatedText from '../../components/AnimatedText';
import AppContext from '../../context/AppContext';
import { StyledHeading } from './StyledSectionHeading';

const SectionHeading = ({ sectionType, children }) => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledHeading sectionId={sectionId}>
      <AnimatedText
        slideDown={sectionId === sectionType}
        slideUp={sectionId !== sectionType}
      >
        {children}
      </AnimatedText>
    </StyledHeading>
  );
};

export default SectionHeading;
