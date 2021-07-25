import styled from 'styled-components';
import avatar from '../../assets/images/coder.svg';

export const StyledHome = styled.section`
  ${({ theme }) => theme.mixins.view}

  background: url(${avatar}) right / 100rem 100rem no-repeat 
    ${({ theme }) => theme.colors.white};
`;

export const StyledInner = styled.div`
  position: fixed;
  top: 50%;
  left: 10%;
`;
