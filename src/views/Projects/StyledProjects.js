import styled from 'styled-components';

export const StyledProjects = styled.section`
  ${({ theme }) => theme.mixins.view}
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
