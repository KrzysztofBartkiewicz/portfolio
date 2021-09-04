import React, { useRef, useEffect, useContext } from 'react';
import Button from '../Button';
import AppContext from '../../context/AppContext';
import gsap from 'gsap';
import { buttonTypes } from '../../helpers';
import { StyledLogoContainer, StyledLogo } from './StyledContainer';

const LogoContainer = () => {
  const containerRef = useRef(null);

  const { activeSection, isMenuVisible, handleMenuVisibility, isScrolling } =
    useContext(AppContext);

  const sectionId = activeSection ? activeSection.id : null;

  useEffect(() => {
    if (isScrolling) {
      const container = containerRef.current;
      const tl = gsap.timeline();
      tl.set(container, { opacity: 0 }).to(container, {
        opacity: 1,
        duration: 0.4,
        delay: 0.6,
      });
    }
  }, [isScrolling]);

  return (
    <StyledLogoContainer ref={containerRef}>
      <Button
        buttonType={buttonTypes.hamburger}
        onClickFn={() => handleMenuVisibility(!isMenuVisible)}
      />
      <StyledLogo isMenuVisible={isMenuVisible} sectionId={sectionId}>
        portfolio
      </StyledLogo>
    </StyledLogoContainer>
  );
};

export default LogoContainer;
