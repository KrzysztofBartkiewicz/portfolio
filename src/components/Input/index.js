import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap/gsap-core';
import {
  StyledInput,
  StyledLabel,
  StyledTextarea,
  StyledWrapper,
} from './StyledInput';

const Input = ({ value, onChangeFn, label, type, textArea, required }) => {
  const labelRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    const lablelEl = labelRef.current;
    const inputEl = inputRef.current;
    const tl = gsap.timeline();

    if (isFocused) {
      tl.to(lablelEl, { scale: 0, xPercent: 100, yPercent: -40, duration: 0.1 })
        .set(lablelEl, {
          scale: 0.5,
          xPercent: -100,
          yPercent: -55,
          opacity: 1,
        })
        .to(lablelEl, { xPercent: -20, duration: 0.1 });
    } else if (inputEl.value.length === 0) {
      tl.set(lablelEl, { scale: 1, xPercent: 0, yPercent: 0, opacity: 0.3 });
    }
  }, [isFocused]);

  return (
    <StyledWrapper>
      {textArea ? (
        <>
          <StyledLabel ref={labelRef} htmlFor={label}>
            {label}
          </StyledLabel>
          <StyledTextarea
            ref={inputRef}
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
            ref={inputRef}
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
