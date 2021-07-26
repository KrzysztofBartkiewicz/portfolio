import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledScrollIcon, StyledScrollInfo } from './StyledScrollInfo';

const ScrollInfo = () => {
  const wheellRef = useRef(null);

  useEffect(() => {
    const wheel = wheellRef.current;
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(wheel, { y: 3, duration: 0.6 });
    tl.to(wheel, { y: 5, duration: 0.4, stagger: 0.1 });
    tl.to(wheel, { y: 0, duration: 0.4, stagger: 0.1 });
  }, []);

  return (
    <StyledScrollInfo>
      <StyledScrollIcon>
        <span ref={wheellRef}></span>
      </StyledScrollIcon>
      <p>Scroll down</p>
    </StyledScrollInfo>
  );
};

export default ScrollInfo;
