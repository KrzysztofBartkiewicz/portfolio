import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ buttonType, theme }) =>
    buttonType === 'text' &&
    css`
      border: none;
      background: transparent;
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.blue};
      }
    `}
`;
