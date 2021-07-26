import styled, { css } from 'styled-components';
import { buttonTypes } from '../../helpers';

export const StyledBar = styled.span`
  display: none;
  width: 4rem;
  height: 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};

  ${({ buttonType, theme }) =>
    buttonType === buttonTypes.hamburger &&
    css`
      display: block;
      position: absolute;
      top: 33%;

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
  ${({ buttonType, theme }) =>
    buttonType === buttonTypes.text &&
    css`
      border: none;
      background: transparent;
      transition: color 0.3s;

      &:hover {
        color: ${theme.colors.blue};
      }
    `}

  ${({ buttonType, theme }) =>
    buttonType === buttonTypes.hamburger &&
    css`
      width: 6rem;
      padding: 2rem 1rem;
      border: none;
      background: transparent;
      position: relative;

      &:hover ${StyledBar}::after {
        width: 3rem;
      }
    `}
`;
