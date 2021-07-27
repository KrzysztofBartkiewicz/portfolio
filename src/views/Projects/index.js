import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes } from '../../helpers';
import { StyledProjects } from './StyledProjects';

const Projects = ({ id }) => {
  return (
    <StyledProjects id={sectionTypes.projects}>
      <SectionHeading sectionType={sectionTypes.projects} id={id}>
        Projects
      </SectionHeading>
    </StyledProjects>
  );
};

export default Projects;
