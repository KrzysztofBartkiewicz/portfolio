import React, { useRef, useEffect } from 'react';
import gsap from 'gsap/gsap-core';
import {
  StyledDot,
  StyledMovingDot,
  StyledPagination,
} from './StyledPagination';

const Pagination = ({ id, onClickFn }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const [movingDot, homeDot, projectsDot, contactDot] =
      wrapperRef.current.children;

    const getTarget = () => {
      switch (id) {
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
  }, [id]);

  return (
    <StyledPagination ref={wrapperRef}>
      <StyledMovingDot />
      <StyledDot onClick={() => onClickFn('home')} active={id === 'home'}>
        <p>Home</p>
      </StyledDot>
      <StyledDot
        onClick={() => onClickFn('projects')}
        active={id === 'projects'}
      >
        <p>Projects</p>
      </StyledDot>
      <StyledDot onClick={() => onClickFn('contact')} active={id === 'contact'}>
        <p>Contact</p>
      </StyledDot>
    </StyledPagination>
  );
};

export default Pagination;
