import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.blue};
`;
