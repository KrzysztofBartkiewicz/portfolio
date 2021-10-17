import styled from 'styled-components';
import bg from '../../assets/images/world.svg';
import Heading from '../../components/Heading';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}
  padding: 15rem 0;
  background: linear-gradient(rgba(24, 90, 219, 0.7), rgba(24, 90, 219, 0.7)),
    url(${bg}) center / cover no-repeat ${({ theme }) => theme.colors.white};
  display: flex;

  ${({ theme }) => theme.mq.mobile} {
    padding-top: 15rem;
    flex-direction: column;
  }
`;

export const StyledContactWrapper = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.l};

  ${({ theme }) => theme.mq.mobile} {
    margin: 1rem 0 0 ${({ theme }) => theme.margins.leftMargin};
  }
`;

export const StyledHeadingWrapper = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme }) => theme.margins.leftMargin};

  ${({ theme }) => theme.mq.mobile} {
    width: 100%;
  }
`;

export const StyledInner = styled.div`
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 1.5rem;
  }
`;

export const StyledContactHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  ${({ theme }) => theme.mq.mobile} {
    font-size: 5.3rem;
  }
`;

export const StyledDataHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;
