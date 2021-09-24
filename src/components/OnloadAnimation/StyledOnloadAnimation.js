import styled from 'styled-components';

export const StyledAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${({ theme }) => theme.levels.l3};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Pacifico', cursive;
    font-size: 8rem;
    display: none;
  }
`;
