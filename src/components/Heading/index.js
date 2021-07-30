import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
} from './StyledHeading';

const Heading = ({ children, headingType, className, color, marginBottom }) => {
  switch (headingType) {
    case 'h1':
      return (
        <StyledHeadingH1
          marginBottom={marginBottom}
          color={color}
          className={className}
        >
          {children}
        </StyledHeadingH1>
      );
    case 'h2':
      return (
        <StyledHeadingH2
          marginBottom={marginBottom}
          color={color}
          className={className}
        >
          {children}
        </StyledHeadingH2>
      );
    default:
      return (
        <StyledHeadingH3
          marginBottom={marginBottom}
          color={color}
          className={className}
        >
          {children}
        </StyledHeadingH3>
      );
  }
};

export default Heading;
