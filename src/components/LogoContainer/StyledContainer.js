import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledLogoContainer = styled.div`
  padding: 3rem 0 0 2rem;
  display: flex;
  align-items: center;
  max-width: fit-content;
  position: fixed;
  z-index: 10;
`;

export const StyledLogo = styled.span`
  font-family: 'Dokdo', cursive;
  font-size: 5rem;
  display: block;
  margin-left: 6rem;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0s 0.5s;

  ${({ sectionId, theme }) =>
    sectionId === sectionTypes.contact &&
    css`
      color: ${theme.colors.white};
    `}
`;
