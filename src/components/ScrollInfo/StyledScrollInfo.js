import styled from 'styled-components';

export const StyledScrollInfo = styled.div`
  margin: 4rem 0 0 3rem;
  display: flex;
  align-items: center;
  pointer-events: none;

  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 10rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

export const StyledScrollIcon = styled.div`
  width: 2rem;
  height: 3rem;
  margin-right: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 40%;
  position: relative;

  span {
    display: block;
    width: 2px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
  }
`;

export const StyledLinkWrapper = styled.div`
  margin-left: 8rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  pointer-events: all;

  ${({ theme }) => theme.mq.mobile} {
    margin-left: 3rem;
  }
`;
