import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledHeading = styled.div`
  position: fixed;
  top: 3rem;
  right: 5%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: color 0s 0.5s;

  ${({ sectionId, theme }) =>
    sectionId !== sectionTypes.home &&
    css`
      color: ${theme.colors.white};
    `};
`;
