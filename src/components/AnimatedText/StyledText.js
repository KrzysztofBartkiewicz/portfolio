import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  overflow: hidden;
`;

export const StyledText = styled.p`
  display: block;

  ${({ size, theme }) =>
    size &&
    css`
      font-size: ${theme.fontSizes[size]};
      line-height: 1.5;
    `}

  ${({ weight, theme }) =>
    weight &&
    css`
      font-weight: ${theme.fontWeights[weight]};
    `}
`;
