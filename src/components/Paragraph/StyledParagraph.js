import styled, { css } from 'styled-components';

export const StyledParagraph = styled.p`
  ${({ size, theme }) =>
    size === 'l'
      ? css`
          font-size: ${theme.fontSizes.l};
        `
      : null}
`;
