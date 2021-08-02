import styled, { css } from 'styled-components';
import { buttonTypes, sectionTypes } from '../../helpers';

export const StyledBar = styled.span`
  display: none;
  width: 4rem;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.5s 0.5s, transform 1s ease-in-out;

  ${({ buttonType, isMenuVisible, sectionId, theme }) =>
    buttonType === buttonTypes.hamburger &&
    css`
      display: block;
      position: absolute;
      top: 33%;
      background-color: ${sectionId !== sectionTypes.home && !isMenuVisible
        ? theme.colors.white
        : theme.colors.black};

      &::after {
        content: '';
        display: block;
        width: 2.5rem;
        height: inherit;
        background-color: inherit;
        position: absolute;
        top: 1rem;
        right: 0;
        border-radius: inherit;
        transition: width 0.6s ease, transform 1s ease-in-out;
      }
    `}

  ${({ isMenuVisible, theme }) =>
    isMenuVisible &&
    css`
      transform: rotate(-45deg);
      background-color: ${theme.colors.grey};

      &::after {
        transform: rotate(90deg) translateX(-1rem);
        width: 4rem;
      }
    `}
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  ${({ buttonType, theme }) =>
    buttonType === buttonTypes.text &&
    css`
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.blue};
      }
    `}

  ${({ buttonType }) =>
    buttonType === buttonTypes.hamburger &&
    css`
      width: 6rem;
      padding: 2rem 1rem;
      position: relative;
    `}

  ${({ isMenuVisible }) =>
    !isMenuVisible &&
    css`
      &:hover ${StyledBar}::after {
        width: 3rem;
      }
    `}

  ${({ buttonType, theme }) =>
    buttonType === buttonTypes.icon &&
    css`
      color: ${theme.colors.white};
      display: flex;
      align-items: center;
      position: relative;

      svg {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        fill: ${theme.colors.white};
      }

      &::after {
        content: '';
        min-width: 0;
        height: 3px;
        background-color: ${theme.colors.white};
        position: absolute;
        bottom: -30%;
        left: 0;
        transition: min-width 0.6s ease-in-out;
      }

      &:hover::after {
        min-width: 100%;
      }
    `}
`;
