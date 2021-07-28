import styled from 'styled-components';
import bg from '../../assets/images/contact.svg';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: linear-gradient(rgb(24,90,219, .9), rgb(24,90,219, .9)), url(${bg}) right / 100rem 100rem no-repeat 
    ${({ theme }) => theme.colors.white};
`;

export const StyledLeftWrapper = styled.div`
  max-width: 50%;
  padding: 15rem 20rem;
`;
