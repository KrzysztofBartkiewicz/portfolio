import styled from 'styled-components';
import bg from '../../assets/images/shapes.svg';
import AnimatedText from '../../components/AnimatedText';
import Heading from '../../components/Heading';

export const StyledAbout = styled.section`
  ${({ theme }) => theme.mixins.view}

  background: linear-gradient(rgba(14, 42, 71, 0.4), rgba(14, 42, 71, 0.4)),  url(${bg}) center / cover no-repeat
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

  ${({ theme }) => theme.mq.mobile} {
    padding-right: 10rem;
  }
`;

export const StyledDot = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledSubHeading = styled(AnimatedText)``;

export const StyledReactSpan = styled.span`
  color: ${({ theme }) => theme.colors.brand.react};
`;

export const StyledSassSpan = styled.span`
  color: ${({ theme }) => theme.colors.brand.sass};
`;

export const StyledTSSpan = styled.span`
  color: ${({ theme }) => theme.colors.brand.ts};
`;

export const StyledES6Span = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const StyledGitSpan = styled.span`
  color: ${({ theme }) => theme.colors.brand.git};
`;

export const StyledReduxSpan = styled.span`
  color: ${({ theme }) => theme.colors.brand.redux};
`;
