import styled from 'styled-components';
import bg from '../../assets/images/contact.svg';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${bg}) right / 100rem 100rem no-repeat 
    ${({ theme }) => theme.colors.white};
`;
