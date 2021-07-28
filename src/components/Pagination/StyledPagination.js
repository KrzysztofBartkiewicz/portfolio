import styled, { css } from 'styled-components';

export const StyledPagination = styled.div`
  position: fixed;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
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
    transition: opacity 1s;
    font-size: ${({ theme }) => theme.fontSizes.l};
    pointer-events: none;

    ${({ active }) =>
      active &&
      css`
        opacity: 1;
      `};
  }
`;

export const StyledMovingDot = styled.div`
  ${dot}
  background: ${({ theme }) => theme.colors.yellow};
  z-index: 10;
`;
