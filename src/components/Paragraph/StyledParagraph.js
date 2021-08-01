import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'l':
        return theme.fontSizes.l;
      case 'xl':
        return theme.fontSizes.xl;
      case 'xs':
        return theme.fontSizes.xs;

      default:
        return theme.fontSizes.s;
    }
  }};
`;
