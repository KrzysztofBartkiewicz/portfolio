import React from 'react';
import { StyledLink } from './StyledLink';

const Link = ({ src, children }) => {
  return <StyledLink src={src}>{children}</StyledLink>;
};

export default Link;
