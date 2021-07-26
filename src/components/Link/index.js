import React from 'react';
import { StyledLink } from './StyledLink';

const Link = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default Link;
