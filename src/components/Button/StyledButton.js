import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ buttonType }) =>
    buttonType === 'text' &&
    css`
      border: none;
      background: transparent;
    `}
`;
