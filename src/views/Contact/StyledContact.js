import styled from 'styled-components';
import bg from '../../assets/images/world.svg';
import Heading from '../../components/Heading';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}

  padding: 15rem 0;
  background: linear-gradient(rgba(24, 90, 219, 0.7), rgba(24, 90, 219, 0.7)),
    url(${bg}) center / cover no-repeat ${({ theme }) => theme.colors.white};
  display: flex;
`;

export const StyledContactWrapper = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const StyledHeadingWrapper = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme }) => theme.margins.leftMargin};
`;

export const StyledInner = styled.div`
  margin-bottom: 5rem;
`;

export const StyledContactHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const StyledDataHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;
