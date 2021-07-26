import styled from 'styled-components';

export const StyledLogoContainer = styled.div`
  padding: 3rem 0 0 2rem;
  display: flex;
  align-items: center;
  max-width: fit-content;
  position: fixed;
  z-index: 10;
`;

export const StyledLogo = styled.span`
  font-family: 'Dokdo', cursive;
  font-size: 5rem;
  display: block;
  margin-left: 6rem;
  color: ${({ theme }) => theme.colors.black};
`;
