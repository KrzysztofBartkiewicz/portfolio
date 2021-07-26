import React from 'react';
import { StyledBar, StyledButton } from './StyledButton';

const Button = ({ buttonType, children, onClickFn }) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClickFn}>
      <StyledBar buttonType={buttonType} />
      {children}
    </StyledButton>
  );
};

export default Button;
