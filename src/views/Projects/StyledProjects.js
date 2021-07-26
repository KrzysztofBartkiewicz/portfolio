import styled from 'styled-components';
import bg from '../../assets/images/app.svg';

export const StyledProjects = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${bg}) 15% / 100rem 100rem no-repeat 
    ${({ theme }) => theme.colors.white};
`;
