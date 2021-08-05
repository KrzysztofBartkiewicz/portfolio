import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    ${({ theme }) => theme.mq.tablet} {
      font-size: 50%;
    }

    ${({ theme }) => theme.mq.mobile} {
      font-size: 40%;
    }
  }

  body {
    font-family: 'Khula', sans-serif;
    overflow-y: hidden;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-weight: inherit;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
