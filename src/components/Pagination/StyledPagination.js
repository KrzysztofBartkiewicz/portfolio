import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledPagination = styled.div`
  position: fixed;
  left: 8rem;
  bottom: -5rem;
  transform: rotate(-90deg);
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.levels.l1};
`;

const dot = css`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: none;

  &:hover p {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledDot = styled.button`
  ${dot}
  background: ${({ theme }) => theme.colors.grey};
  position: relative;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  & p {
    visibility: none;
    opacity: 0;
    position: absolute;
    left: 3rem;
    top: -7%;
    font-size: ${({ theme }) => theme.fontSizes.l};
    pointer-events: none;
    transition: opacity 1s;

    color: ${({ activeSectionId, theme }) =>
      activeSectionId !== sectionTypes.home
        ? theme.colors.white
        : theme.colors.black};
  }
`;

export const StyledMovingDot = styled.div`
  ${dot}
  transition: background-color 1s;
  z-index: ${({ theme }) => theme.levels.l1 + 10};

  background-color: ${({ sectionId, theme }) => {
    switch (sectionId) {
      case sectionTypes.projects:
        return theme.colors.lightBlue;
      case sectionTypes.about:
        return theme.colors.red;
      case sectionTypes.contact:
        return theme.colors.yellow;

      default:
        return theme.colors.black;
    }
  }};
`;
