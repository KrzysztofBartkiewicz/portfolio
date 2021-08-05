import styled from 'styled-components';
import Heading from '../../components/Heading';
import bg from '../../assets/images/waves.svg';

export const StyledProjects = styled.section`
  ${({ theme }) => theme.mixins.view}
  background: 
    url(${bg}) center / cover no-repeat
      ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.mobile} {
    flex-direction: column;
    padding-top: 15rem;
  }
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${({ theme }) => theme.margins.leftMargin};

  span {
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  ${({ theme }) => theme.mq.mobile} {
    padding-right: 5rem;
  }
`;

export const StyledInner = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.mobile} {
    align-items: flex-start;
    margin-top: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 3rem auto;
    grid-gap: 3rem;

    ${({ theme }) => theme.mq.desktopSm} {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  li {
    &:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }

    &:nth-child(2) {
      grid-column: 2;
      grid-row: 2;

      ${({ theme }) => theme.mq.desktopSm} {
        grid-row: 1;
      }
    }

    &:nth-child(3) {
      grid-column: 3;
      grid-row: 1;

      ${({ theme }) => theme.mq.desktopSm} {
        grid-column: 1;
        grid-row: 2;
      }
    }

    &:nth-child(4) {
      grid-column: 4;
      grid-row: 2;

      ${({ theme }) => theme.mq.desktopSm} {
        grid-column: 2;
      }
    }
  }
`;
