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

  const renderHeading = () => (
    <>
      <SectionHeading sectionType={sectionTypes.projects}>
        Projects
      </SectionHeading>
      <StyledHeading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== sectionTypes.projects}
          slideDown={sectionId === sectionTypes.projects}
        >
          My latest
        </AnimatedText>
        <AnimatedText
          slideUp={sectionId !== sectionTypes.projects}
          slideDown={sectionId === sectionTypes.projects}
        >
          projects<span>.</span>
        </AnimatedText>
        <AnimatedText
          slideUp={sectionId !== sectionTypes.projects}
          slideDown={sectionId === sectionTypes.projects}
          size="l"
          weight="bold"
        >
          All of them are made in <span>React</span> which is the JS framework I
          like to work with the most.
        </AnimatedText>
      </StyledHeading>
    </>
  );

  const renderAppsWrapper = () => (
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
  );

  return (
    <StyledProjects id={sectionTypes.projects}>
      {renderHeading()}
      {renderAppsWrapper()}
    </StyledProjects>
  );
};

export default Projects;
