import React, { useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';
import reactLogo from '../../assets/icons/react.svg';
import { spiningElements } from '../../helpers';
import {
  StyledIcon,
  StyledOrbit,
  StyledReactLogo,
  StyledWrapper,
} from './StyledSpiningAnim';

const SpiningAnim = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const elementsArr = [...wrapperRef.current.children];
    elementsArr.forEach((el, index) => {
      gsap.to(el, {
        rotation: index === 0 ? -360 : 360,
        repeat: -1,
        ease: Linear.easeNone,
        duration: el.dataset.duration,
      });
      if (index !== 0) {
        const iconElement = el.children[0];
        gsap.to(iconElement, {
          rotation: -360,
          repeat: -1,
          ease: Linear.easeNone,
          duration: el.dataset.duration,
        });
      }
    });
  }, []);

  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledReactLogo data-duration={4} src={reactLogo} alt="react icon" />
      {spiningElements.map(({ size, duration, icon }) => (
        <StyledOrbit key={size} size={size} data-duration={duration}>
          <StyledIcon src={icon} alt="spining icon" />
        </StyledOrbit>
      ))}
    </StyledWrapper>
  );
};

export default SpiningAnim;
