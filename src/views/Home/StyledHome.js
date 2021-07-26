import styled from 'styled-components';
import avatar from '../../assets/images/coder.svg';

const leftMargin = '10%';

export const StyledHome = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: url(${avatar}) right / 100rem 100rem no-repeat 
    ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const StyledInner = styled.div`
  position: fixed;
  top: 50%;
  left: ${leftMargin};

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
  left: ${leftMargin};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const StyledSectionLinks = styled.div`
  & *:first-child {
    margin-right: 4rem;
  }
`;

export const StyledContactLinks = styled.div`
  & *:first-child {
    margin-right: 4rem;
  }
`;
