import styled from 'styled-components';

export const StyledHeadingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: 1.1;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom ? theme.margins[marginBottom] : '0'};
`;

export const StyledHeadingH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom ? theme.margins[marginBottom] : '0'};
`;

export const StyledHeadingH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: uppercase;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom ? theme.margins[marginBottom] : '0'};
`;
