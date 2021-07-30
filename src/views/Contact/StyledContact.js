import styled from 'styled-components';
import bg from '../../assets/images/contact.svg';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}

  padding: 15rem 20rem;
  background: linear-gradient(rgba(24, 90, 219, 0.95), rgba(24, 90, 219, 0.95)),
    url(${bg}) 75% / 100rem 100rem no-repeat
      ${({ theme }) => theme.colors.white};
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
`;

export const StyledInner = styled.div`
  margin-bottom: 5rem;
`;
