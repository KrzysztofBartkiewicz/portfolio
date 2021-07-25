import React, { forwardRef } from 'react';
import Heading from '../../components/Heading';
import { StyledProjects } from './StyledProjects';

const Projects = forwardRef((props, ref) => {
  return (
    <StyledProjects ref={ref} id="projects">
      <Heading headingType="h1">Hello</Heading>
    </StyledProjects>
  );
});

export default Projects;
