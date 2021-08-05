import styled from 'styled-components';
import bg from '../../assets/images/shapes.svg';
import AnimatedText from '../../components/AnimatedText';
import Heading from '../../components/Heading';

export const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${bg}) center / cover no-repeat
    ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.mq.mobile} {
    padding-top: 15rem;
    flex-direction: column;
  }
`;

export const StyledAboutHeading = styled(Heading)`
  margin-left: ${({ theme }) => theme.margins.leftMargin};
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.levels.l1};

  span {
    color: ${({ theme }) => theme.colors.red};
  }

  ${({ theme }) => theme.mq.mobile} {
    padding-right: 10rem;
  }
`;

export const StyledSubHeading = styled(AnimatedText)`
  span {
    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.lightBlue};
    }

    &:nth-child(3) {
      color: ${({ theme }) => theme.colors.red};
    }

    &:nth-child(4) {
      color: ${({ theme }) => theme.colors.yellow};
    }

    &:nth-child(6) {
      color: ${({ theme }) => theme.colors.red};
    }

    &:nth-child(8) {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
