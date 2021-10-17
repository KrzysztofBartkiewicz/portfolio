import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledLogoContainer = styled.div`
  padding: 3rem 0 0 2rem;
  display: flex;
  align-items: center;
  max-width: fit-content;
  position: fixed;
  z-index: ${({ theme }) => theme.levels.l2};
`;

export const StyledLogo = styled.span`
  font-family: 'Rock Salt', cursive;
  font-size: 5rem;
  display: block;
  margin-left: 11rem;
  color: ${({ theme }) => theme.colors.black};
  transition: color 0s 0.5s;

  ${({ theme }) => theme.mq.mobile} {
    margin-left: 3rem;
  }

  ${({ sectionId, theme }) =>
    sectionId !== sectionTypes.home &&
    css`
      color: ${theme.colors.white};
    `}

  ${({ isMenuVisible, theme }) =>
    isMenuVisible &&
    css`
      color: ${theme.colors.black};
    `}
`;
