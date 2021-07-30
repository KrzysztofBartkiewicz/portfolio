import React from 'react';
import { StyledLink } from './StyledLink';

const Link = ({ href, children, color }) => {
  return (
    <StyledLink href={href} color={color}>
      {children}
    </StyledLink>
  );
};

export default Link;
