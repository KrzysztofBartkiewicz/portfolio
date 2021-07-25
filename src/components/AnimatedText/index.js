import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledText, StyledWrapper } from './StyledText';

const AnimatedText = ({ children, slideUp, slideDown }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    if (slideUp) {
      gsap.fromTo(text, { y: 0 }, { y: -text.offsetHeight, duration: 0.5 });
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
    <StyledWrapper>
      <StyledText ref={textRef}>{children}</StyledText>
    </StyledWrapper>
  );
};

export default AnimatedText;
