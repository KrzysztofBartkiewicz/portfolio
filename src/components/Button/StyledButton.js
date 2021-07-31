import styled, { css } from 'styled-components';
import { buttonTypes, sectionTypes } from '../../helpers';

export const StyledBar = styled.span`
  display: none;
  width: 4rem;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  transition: background-color 0s 0.5s;

  ${({ buttonType, sectionId, theme }) =>
    buttonType === buttonTypes.hamburger &&
    css`
      display: block;
      position: absolute;
      top: 33%;
      background-color: ${sectionId !== sectionTypes.home &&
      theme.colors.white};

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
        transition: width 0.6s ease;
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
