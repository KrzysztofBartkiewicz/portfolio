import styled, { css } from 'styled-components';
import Heading from '../Heading';

export const StyledMenu = styled.nav`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: ${({ theme }) => theme.levels.l2};
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.margins.leftMargin};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledList = styled.ul`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
