import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ buttonType, children, onClickFn }) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClickFn}>
      {children}
    </StyledButton>
  );
};

export default Button;
