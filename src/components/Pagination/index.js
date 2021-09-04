import React, { useRef, useEffect, useContext, useState } from 'react';
import gsap from 'gsap/gsap-core';
import AppContext from '../../context/AppContext';
import { sectionTypes } from '../../helpers';
import {
  StyledDot,
  StyledHoverLabel,
  StyledMovingDot,
  StyledPagination,
} from './StyledPagination';

const Pagination = () => {
  const wrapperRef = useRef(null);
  const labelRef = useRef(null);

  const { activeSection, handleGoToPage, isScrolling } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  const [labelText, setLabelText] = useState('');

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

    const setDot = (duration) =>
      gsap.to(movingDot, {
        y: getTarget().offsetTop,
        x: getTarget().offsetLeft,
        duration,
      });

    setDot(1);

    window.addEventListener('resize', () => setDot(0));
    return () => window.removeEventListener('resize', () => setDot(0));
  }, [sectionId]);

  useEffect(() => {
    if (isScrolling) {
      setLabelText('');
    }
  }, [isScrolling]);

  const handleHover = (event, sectionType) => {
    if (isScrolling) {
      return;
    }

    const label = labelRef.current;

    if (event.type === 'mouseenter') {
      setLabelText(
        sectionType
          .split('')
          .map((l, i) => (i === 0 ? l.toUpperCase() : l))
          .join('')
      );
      gsap.fromTo(label, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
      setLabelText('');
    }
  };

  return (
    <StyledPagination ref={wrapperRef}>
      <StyledMovingDot sectionId={sectionId} />
      {Object.keys(sectionTypes).map((sectionType) => (
        <StyledDot
          key={sectionType}
          onClick={() => handleGoToPage(sectionType)}
          activeSectionId={activeSection && sectionId}
          sectionId={sectionType}
          onMouseEnter={(event) => handleHover(event, sectionType)}
          onMouseLeave={(event) => handleHover(event, sectionType)}
        />
      ))}
      <StyledHoverLabel ref={labelRef} sectionId={sectionId}>
        {labelText}
      </StyledHoverLabel>
    </StyledPagination>
  );
};

export default Pagination;
