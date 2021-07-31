import styled from 'styled-components';
import bg from '../../assets/images/shapes.svg';

export const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${bg}) center / cover no-repeat
    ${({ theme }) => theme.colors.white};
`;
