import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
  StyledHeadingH4
} from './StyledHeading';

const Heading = ({ children, headingType, className }) => {
  switch (headingType) {
    case 'h1':
      return (
        <StyledHeadingH1 className={className}>{children}</StyledHeadingH1>
      );
    case 'h2':
      return (
        <StyledHeadingH2 className={className}>{children}</StyledHeadingH2>
      );
      case 'h4':
        return <StyledHeadingH4 className={className}>{children}</StyledHeadingH4>
    default:
      return (
        <StyledHeadingH3 className={className}>{children}</StyledHeadingH3>
      );
  }
};

export default Heading;
