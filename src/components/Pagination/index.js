import React, { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap/gsap-core';
import AppContext from '../../context/AppContext';
import { sectionTypes } from '../../helpers';
import {
  StyledDot,
  StyledMovingDot,
  StyledPagination,
} from './StyledPagination';

const Pagination = ({ onClickFn }) => {
  const wrapperRef = useRef(null);

  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  useEffect(() => {
    const [movingDot, homeDot, projectsDot, contactDot] =
      wrapperRef.current.children;

    const getTarget = () => {
      switch (sectionId) {
        case sectionTypes.contact:
          return contactDot;
        case sectionTypes.projects:
          return projectsDot;
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
      <StyledMovingDot />
      <StyledDot
        onClick={() => onClickFn(sectionTypes.home)}
        active={sectionId === sectionTypes.home}
        sectionId={sectionTypes.home}
      >
        <p>Home</p>
      </StyledDot>
      <StyledDot
        onClick={() => onClickFn(sectionTypes.projects)}
        active={sectionId === sectionTypes.projects}
        sectionId={sectionTypes.projects}
      >
        <p>Projects</p>
      </StyledDot>
      <StyledDot
        onClick={() => onClickFn(sectionTypes.contact)}
        active={sectionId === sectionTypes.contact}
        sectionId={sectionTypes.contact}
      >
        <p>Contact</p>
      </StyledDot>
    </StyledPagination>
  );
};

export default Pagination;
