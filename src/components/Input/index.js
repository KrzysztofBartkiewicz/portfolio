import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef, useState } from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledTextarea,
  StyledWrapper,
} from './StyledInput';

const Input = ({ value, onChangeFn, label, type, textArea, required }) => {
  const labelRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    const lablelEl = labelRef.current;

    if (isFocused) {
      const tl = gsap.timeline();
      tl.to(lablelEl, { scale: 0, xPercent: 100, yPercent: -40, duration: 0.1 })
        .set(lablelEl, {
          scale: 0.5,
          xPercent: -100,
          yPercent: -55,
          opacity: 1,
        })
        .to(lablelEl, { xPercent: -20, duration: 0.1 });
    } else {
      const tl = gsap.timeline();
      tl.set(lablelEl, { scale: 1, xPercent: 0, yPercent: 0, opacity: 0.3 });
    }
  }, [isFocused]);

  return (
    <StyledWrapper onClick={(e) => console.dir(e.target)}>
      {textArea ? (
        <>
          <StyledLabel ref={labelRef} htmlFor={label}>
            {label}
          </StyledLabel>
          <StyledTextarea
            required={required}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={onChangeFn}
            id={label}
          />
        </>
      ) : (
        <>
          <StyledLabel ref={labelRef} htmlFor={label}>
            {label}
          </StyledLabel>
          <StyledInput
            required={required}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type={type}
            id={label}
            value={value}
            onChange={onChangeFn}
          />
        </>
      )}
    </StyledWrapper>
  );
};

export default Input;
