import styled, { css } from 'styled-components';

const sharedStyles = css`
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledHeadingH1 = styled.h1`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.1;
`;

export const StyledHeadingH2 = styled.h2`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const StyledHeadingH3 = styled.h3`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: uppercase;
`;
