import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledText, StyledWrapper } from './StyledText';

const AnimatedText = ({ children, slideUp, slideDown }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = wrapper.children[0];

    if (slideUp) {
      gsap.fromTo(text, { y: 0 }, { y: -text.offsetHeight - 3, duration: 0.5 });
    }
    if (slideDown) {
      gsap.fromTo(
        text,
        { y: text.offsetHeight },
        { y: 0, duration: 0.5, delay: 0.5 }
      );
    }
  }, [slideUp, slideDown]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledText>{children}</StyledText>
    </StyledWrapper>
  );
};

export default AnimatedText;
