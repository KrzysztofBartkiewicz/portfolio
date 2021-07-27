import styled from 'styled-components';

export const StyledAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Dokdo', cursive;
    font-size: 8rem;
    display: none;
  }
`;
