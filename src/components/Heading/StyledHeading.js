import styled from 'styled-components';

export const StyledHeadingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.1;
`;

export const StyledHeadingH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const StyledHeadingH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
`;
