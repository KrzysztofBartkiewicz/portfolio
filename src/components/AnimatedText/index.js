import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { StyledText, StyledWrapper } from './StyledText';

const AnimatedText = ({
  children,
  slideUp,
  slideDown,
  size,
  weight,
  className,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = wrapper.children[0];

    const tl = gsap.timeline();

    if (slideUp) {
      tl.set(text, { y: 0 })
        .to(text, {
          y: -text.offsetHeight - 3,
          duration: 0.5,
        })
        .set(text, { autoAlpha: 0 });
    }
    if (slideDown) {
      tl.set(text, { y: text.offsetHeight, autoAlpha: 1 }).to(text, {
        y: 0,
        duration: 0.8,
        delay: 0.8,
      });
    }
  }, [slideUp, slideDown]);

  return (
    <StyledWrapper className={className} ref={wrapperRef}>
      <StyledText size={size} weight={weight}>
        {children}
      </StyledText>
    </StyledWrapper>
  );
};

export default AnimatedText;
