import styled from 'styled-components';

export const StyledForm = styled.form`
  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 3rem;
  }
`;
