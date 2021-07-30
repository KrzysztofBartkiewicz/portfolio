import styled from 'styled-components';
import bg from '../../assets/images/app.svg';

export const StyledProjects = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: linear-gradient(rgba(43, 43, 43, 0.3), rgba(43, 43, 43, 0.3)),
    url(${bg}) 15% / 100rem 100rem no-repeat
      ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInner = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li:not(:last-child) {
    margin-right: 6rem;
  }
`;
