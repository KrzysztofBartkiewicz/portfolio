import React from 'react';
import Card from '../../components/Card';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes, projectsData } from '../../helpers';
import { StyledInner, StyledProjects } from './StyledProjects';

const Projects = ({ id }) => {
  return (
    <StyledProjects id={sectionTypes.projects}>
      <SectionHeading sectionType={sectionTypes.projects} id={id}>
        Projects
      </SectionHeading>
      <StyledInner>
        <ul>
          {projectsData.map(
            ({ title, description, icon, demoUrl, githubUrl }) => (
              <li key={title}>
                <Card
                  icon={icon}
                  faceHeading={title}
                  backHeading="About app"
                  description={description}
                  demoUrl={demoUrl}
                  githubUrl={githubUrl}
                />
              </li>
            )
          )}
        </ul>
      </StyledInner>
    </StyledProjects>
  );
};

export default Projects;
