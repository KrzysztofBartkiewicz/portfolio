import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { buttonTypes } from '../../helpers';
import Button from '../Button';
import { StyledLogoContainer, StyledLogo } from './StyledContainer';

const LogoContainer = ({ isAnimating }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const container = containerRef.current;
      const tl = gsap.timeline();
      tl.set(container, { opacity: 0 }).to(container, {
        opacity: 1,
        duration: 1,
        delay: 0.6,
      });
    }
  }, [isAnimating]);

  return (
    <StyledLogoContainer ref={containerRef}>
      <Button buttonType={buttonTypes.hamburger} />
      <StyledLogo>portfolio</StyledLogo>
    </StyledLogoContainer>
  );
};

export default LogoContainer;
