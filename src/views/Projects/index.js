import React, { useContext } from 'react';
import Card from '../../components/Card';
import SectionHeading from '../../components/SectionHeading';
import AppContext from '../../context/AppContext';
import AnimatedText from '../../components/AnimatedText';
import { sectionTypes, projectsData } from '../../helpers';
import { StyledHeading, StyledProjects, StyledInner } from './StyledProjects';

const Projects = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledProjects id={sectionTypes.projects}>
      <SectionHeading sectionType={sectionTypes.projects} sectionId={sectionId}>
        Projects
      </SectionHeading>
      <StyledHeading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== sectionTypes.projects}
          slideDown={sectionId === sectionTypes.projects}
        >
          My latest projects<span>.</span>
        </AnimatedText>
      </StyledHeading>
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
