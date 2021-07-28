import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import { StyledHeading } from './StyledSectionHeading';

const SectionHeading = ({ sectionType, children, sectionId }) => {
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
