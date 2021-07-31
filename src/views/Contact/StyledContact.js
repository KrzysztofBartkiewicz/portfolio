import styled from 'styled-components';
import bg from '../../assets/images/contact.svg';
import Heading from '../../components/Heading';

export const StyledContact = styled.section`
  ${({ theme }) => theme.mixins.view}

  padding: 15rem 0;
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
  margin-left: ${({ theme }) => theme.margins.leftMargin};
`;

export const StyledInner = styled.div`
  margin-bottom: 5rem;
`;

export const StyledContactHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledDataHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;
