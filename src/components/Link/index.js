import React from 'react';
import { StyledLink } from './StyledLink';

const Link = ({ href, children, color }) => {
  return (
    <StyledLink target="_blank" href={href} color={color}>
      {children}
    </StyledLink>
  );
};

export default Link;
