import styled, { css } from 'styled-components';

export const StyledOrbit = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;

  ${({ size }) =>
    size &&
    css`
      width: ${size}rem;
      height: ${size}rem;
    `}
`;

export const StyledReactLogo = styled.img`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledIcon = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%);
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;
