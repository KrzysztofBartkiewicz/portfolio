import React, { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap/gsap-core';
import AppContext from '../../context/AppContext';
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
        case 'contact':
          return contactDot;
        case 'projects':
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
        onClick={() => onClickFn('home')}
        active={sectionId === 'home'}
      >
        <p>Home</p>
      </StyledDot>
      <StyledDot
        onClick={() => onClickFn('projects')}
        active={sectionId === 'projects'}
      >
        <p>Projects</p>
      </StyledDot>
      <StyledDot
        onClick={() => onClickFn('contact')}
        active={sectionId === 'contact'}
      >
        <p>Contact</p>
      </StyledDot>
    </StyledPagination>
  );
};

export default Pagination;
