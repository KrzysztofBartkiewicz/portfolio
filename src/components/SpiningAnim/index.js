import React, { useEffect, useRef } from 'react';
import gsap, { Linear } from 'gsap';
import reactLogo from '../../assets/icons/react.svg';
import npmLogo from '../../assets/icons/npm.svg';
import sassLogo from '../../assets/icons/sass.svg';
import css3Logo from '../../assets/icons/css3.svg';
import gitLogo from '../../assets/icons/git.svg';
import jsLogo from '../../assets/icons/js.svg';
import html5Logo from '../../assets/icons/html5.svg';
import {
  StyledIcon,
  StyledOrbit,
  StyledReactLogo,
  StyledWrapper,
} from './StyledSpiningAnim';

const rotatingElements = [
  {
    size: 16,
    duration: 3,
    icon: html5Logo,
  },
  {
    size: 26,
    duration: 5,
    icon: npmLogo,
  },
  {
    size: 36,
    duration: 7,
    icon: sassLogo,
  },
  {
    size: 49,
    duration: 9,
    icon: css3Logo,
  },
  {
    size: 67,
    duration: 11,
    icon: gitLogo,
  },
  {
    size: 81,
    duration: 15,
    icon: jsLogo,
  },
];

const SpiningAnim = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const elementsArr = [...wrapperRef.current.children];
    elementsArr.forEach((el) => {
      gsap.to(el, {
        rotation: 360,
        repeat: -1,
        ease: Linear.easeNone,
        duration: el.dataset.duration,
      });
      gsap.to(el.children[0], {
        rotation: -360,
        repeat: -1,
        ease: Linear.easeNone,
        duration: el.dataset.duration,
      });
    });
  }, []);

  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledReactLogo data-duration={4} src={reactLogo} alt="react icon" />
      {rotatingElements.map(({ size, duration, icon }) => (
        <StyledOrbit size={size} data-duration={duration}>
          <StyledIcon src={icon} alt="rotating icon" />
        </StyledOrbit>
      ))}
    </StyledWrapper>
  );
};

export default SpiningAnim;
