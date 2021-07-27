import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledAnimation } from './StyledOnloadAnimation';

const OnloadAnimation = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const lettersArr = [...wrapper.children];

    const tl = gsap.timeline({ paused: true, delay: 0.5 });

    lettersArr.forEach((letter, index) => {
      tl.set(letter, { display: 'inline' })
        .to(letter, { scale: 4, duration: 0.1 })
        .to(letter, { scale: 1, duration: 0.1 });
    });
    tl.to(wrapper, { scale: 4, duration: 0.1, delay: 0.3 })
      .to(wrapper, { scale: 1, duration: 0.1 })
      .set(wrapper, { display: 'none', delay: 0.3 })
      .play();
  }, []);

  const text = 'portfolio';

  return (
    <StyledAnimation ref={wrapperRef}>
      {[...text].map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </StyledAnimation>
  );
};

export default OnloadAnimation;
