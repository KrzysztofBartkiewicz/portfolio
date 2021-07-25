import { css } from 'styled-components';

const mainTheme = {
  colors: {
    white: '#FAFAFA',
    black: '#212529',
    blue: '#185ADB',
    yellow: '#FFC947',
    grey: '#EFEFEF',
    darkGrey: '#444444',
  },

  fontSizes: {
    xxl: '6.3rem',
    xl: '3.3rem',
    l: '1.4rem',
    s: '1.3rem',
    xs: '0.9rem',
  },

  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },

  mixins: {
    view: css`
      height: 100vh;
    `,
  },
};

export default mainTheme;
