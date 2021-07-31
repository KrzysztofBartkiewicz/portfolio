import styled from 'styled-components';
import bg from '../../assets/images/shapes.svg';
import Heading from '../../components/Heading';

export const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${bg}) center / cover no-repeat
    ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledAboutHeading = styled(Heading)`
  margin-left: ${({ theme }) => theme.margins.leftMargin};
  color: ${({ theme }) => theme.colors.white};
  span {
    color: ${({ theme }) => theme.colors.red};
  }
`;
