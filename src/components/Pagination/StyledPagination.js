import styled, { css } from 'styled-components';
import { sectionTypes } from '../../helpers';

export const StyledPagination = styled.div`
  position: fixed;
  left: 5rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.levels.l1};
`;

const dot = css`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: none;
  margin-right: 2.5rem;
`;

export const StyledDot = styled.button`
  ${dot}
  background: ${({ theme }) => theme.colors.grey};
  position: relative;
`;

export const StyledHoverLabel = styled.p`
  line-height: 1.2;
  height: 1.5rem;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ sectionId, theme }) =>
    sectionId === 'home' ? theme.colors.black : theme.colors.white};
`;

export const StyledMovingDot = styled.div`
  ${dot}
  margin: 0;
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
