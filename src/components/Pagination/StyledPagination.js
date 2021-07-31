import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledPagination = styled.div`
  position: fixed;
  left: 5%;
  bottom: -2%;
  transform: rotate(-90deg);
  display: flex;
  flex-direction: column;
`;

const dot = css`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: none;
`;

export const StyledDot = styled.button`
  ${dot}
  background: ${({ theme }) => theme.colors.grey};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  & p {
    opacity: 0;
    position: absolute;
    left: 3rem;
    top: -7%;
    font-size: ${({ theme }) => theme.fontSizes.l};
    pointer-events: none;
    transition: opacity 1s, color 1s;

    ${({ active, sectionId, theme }) =>
      active &&
      css`
        opacity: 1;
        color: ${sectionId !== sectionTypes.home && theme.colors.white};
      `};
  }
`;

export const StyledMovingDot = styled.div`
  ${dot}
  background: ${({ theme }) => theme.colors.yellow};
  z-index: 10;
`;
