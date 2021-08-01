import React, { useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';
import reactLogo from '../../assets/icons/react.svg';
import npmLogo from '../../assets/icons/npm.svg';
import sassLogo from '../../assets/icons/sass.svg';
import css3Logo from '../../assets/icons/css3.svg';
import gitLogo from '../../assets/icons/git.svg';
import jsLogo from '../../assets/icons/js.svg';
import reduxLogo from '../../assets/icons/redux.svg';
import {
  StyledIcon,
  StyledOrbit,
  StyledReactLogo,
  StyledWrapper,
} from './StyledSpiningAnim';

const spiningElements = [
  {
    size: 16,
    duration: 9,
    icon: reduxLogo,
  },
  {
    size: 26,
    duration: 11,
    icon: npmLogo,
  },
  {
    size: 36,
    duration: 13,
    icon: sassLogo,
  },
  {
    size: 49,
    duration: 17,
    icon: css3Logo,
  },
  {
    size: 67,
    duration: 20,
    icon: gitLogo,
  },
  {
    size: 81,
    duration: 25,
    icon: jsLogo,
  },
];

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
