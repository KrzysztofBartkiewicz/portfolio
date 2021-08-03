import styled, { css } from 'styled-components';
import Heading from '../Heading';

export const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: ${({ theme }) => theme.levels.l2};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15rem 0 0 ${({ theme }) => theme.margins.leftMargin};

  li:not(:last-child) {
    margin-bottom: 8rem;
  }
`;

export const StyledMenuHeading = styled(Heading)`
  ${({ theme }) => css`
    background-image: linear-gradient(
      90deg,
      ${theme.colors.blue} 50%,
      ${theme.colors.black} 0
    );
  `}

  background-position: 100%;
  background-size: 200% 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  transition: background-position 0.5s ease-in-out;

  &:hover {
    background-position: 0;
  }
`;

export const StyledLinks = styled.div`
  position: absolute;
  right: 10%;
  bottom: 5%;
  font-size: ${({ theme }) => theme.fontSizes.l};

  & *:first-child {
    margin-right: 3rem;
  }
`;
