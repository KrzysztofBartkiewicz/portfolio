import styled, { css } from 'styled-components';

const sharedStyles = css`
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
`;

export const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
`;

const focusStyles = css`
  &:focus,
  &:active,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.blue} inset !important;
  }
`;

export const StyledInput = styled.input`
  ${sharedStyles}
  ${focusStyles}
`;

export const StyledTextarea = styled.textarea`
  ${sharedStyles}
  ${focusStyles}
`;
