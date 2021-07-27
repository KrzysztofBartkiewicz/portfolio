import React from 'react';
import AnimatedText from '../../components/AnimatedText';
import { StyledHeading } from './StyledSectionHeading';

const SectionHeading = ({ sectionType, children, id }) => {
  return (
    <StyledHeading>
      <AnimatedText slideDown={id === sectionType} slideUp={id !== sectionType}>
        {children}
      </AnimatedText>
    </StyledHeading>
  );
};

export default SectionHeading;
