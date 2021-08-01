import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ children, size, className }) => {
  return (
    <StyledParagraph className={className} size={size}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
