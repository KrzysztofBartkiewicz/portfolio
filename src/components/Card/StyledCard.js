import styled, { css } from 'styled-components';

const linksStyles = css`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
`;

export const StyledLinks = styled.div`
  ${linksStyles}
`;

export const StyledFaceLinks = styled.div`
  ${linksStyles}
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const StyledFace = styled.div`
  width: 100%;
  height: 100%;
  padding: 70% 0 0 8%;
  position: absolute;
  transition: opacity 0.3s ease-in-out 0.1s;

  svg {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.desktopSm} {
    padding: 7rem 2rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & h3 {
      margin-top: -2rem;
    }
  }
`;

export const StyledBack = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  opacity: 0;
  position: absolute;
  z-index: 10;
  transition: opacity 0.3s ease-in-out 0.1s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledCard = styled.div`
  width: 20.5rem;
  height: 30.5rem;
  transition: border 0.3s ease-in-out;
  backdrop-filter: blur(10px);

  ${({ theme }) => theme.mq.mobile} {
    height: 20rem;
  }

  &:hover {
    border: 1px dashed ${({ theme }) => theme.colors.black};

    ${({ theme }) => theme.mq.tablet} {
      border: none;
    }
  }

  &:hover ${StyledContent} {
    transform: translate(-2rem, -2rem);
    border: 1px solid ${({ theme }) => theme.colors.blue};

    ${({ theme }) => theme.mq.tablet} {
      transform: none;
      border: none;
    }
  }

  &:hover ${StyledFace} {
    opacity: 0;

    ${({ theme }) => theme.mq.tablet} {
      opacity: 1;
    }
  }

  &:hover ${StyledBack} {
    opacity: 1;
  }
`;
