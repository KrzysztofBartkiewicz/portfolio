import styled from 'styled-components';
import Heading from '../../components/Heading';

export const StyledHome = styled.section`
  ${({ theme }) => theme.mixins.view}
  position: relative;
`;

export const StyledInner = styled.div`
  position: fixed;
  top: 50%;
  left: ${({ theme }) => theme.margins.leftMargin};

  &:first-child h3 {
    margin-left: 0.4rem;
  }
`;

export const StyledBottomWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10%;
  left: ${({ theme }) => theme.margins.leftMargin};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const StyledSectionLinks = styled.div`
  & *:not(:last-child) {
    margin-right: 4rem;
  }
`;

export const StyledContactLinks = styled.div`
  & *:first-child {
    margin-right: 4rem;
  }
`;

export const StyledGreeting = styled(Heading)`
  color: ${({ theme }) => theme.colors.blue};
`;
