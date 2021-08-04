import React, { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap/gsap-core';
import AppContext from '../../context/AppContext';
import { sectionTypes } from '../../helpers';
import {
  StyledDot,
  StyledMovingDot,
  StyledPagination,
} from './StyledPagination';

const Pagination = () => {
  const wrapperRef = useRef(null);

  const { activeSection, handleGoToPage } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  useEffect(() => {
    const [movingDot, homeDot, projectsDot, aboutDot, contactDot] =
      wrapperRef.current.children;

    const getTarget = () => {
      switch (sectionId) {
        case sectionTypes.contact:
          return contactDot;
        case sectionTypes.projects:
          return projectsDot;
        case sectionTypes.about:
          return aboutDot;
        default:
          return homeDot;
      }
    };

    gsap.to(movingDot, {
      y: getTarget().offsetTop,
      duration: 1,
    });
  }, [sectionId]);

  return (
    <StyledPagination ref={wrapperRef}>
      <StyledMovingDot sectionId={sectionId} />
      <StyledDot
        onClick={() => handleGoToPage(sectionTypes.home)}
        activeSectionId={activeSection.id}
        sectionId={sectionTypes.home}
      >
        <p>Home</p>
      </StyledDot>
      <StyledDot
        onClick={() => handleGoToPage(sectionTypes.projects)}
        activeSectionId={activeSection.id}
        sectionId={sectionTypes.projects}
      >
        <p>Projects</p>
      </StyledDot>
      <StyledDot
        onClick={() => handleGoToPage(sectionTypes.about)}
        activeSectionId={activeSection.id}
        sectionId={sectionTypes.about}
      >
        <p>About</p>
      </StyledDot>
      <StyledDot
        onClick={() => handleGoToPage(sectionTypes.contact)}
        activeSectionId={activeSection.id}
        sectionId={sectionTypes.contact}
      >
        <p>Contact</p>
      </StyledDot>
    </StyledPagination>
  );
};

export default Pagination;
