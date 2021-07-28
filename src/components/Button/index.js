import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledBar, StyledButton } from './StyledButton';

const Button = ({ buttonType, children, onClickFn }) => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledButton buttonType={buttonType} onClick={onClickFn}>
      <StyledBar sectionId={sectionId} buttonType={buttonType} />
      {children}
    </StyledButton>
  );
};

export default Button;
