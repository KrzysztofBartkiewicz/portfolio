import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { StyledBar, StyledButton } from './StyledButton';

const Button = ({ buttonType, children, onClickFn, icon: Icon, type }) => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledButton type={type} buttonType={buttonType} onClick={onClickFn}>
      <StyledBar sectionId={sectionId} buttonType={buttonType} />
      {Icon ? <Icon /> : null}
      {children}
    </StyledButton>
  );
};

export default Button;
