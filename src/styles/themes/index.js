import { css } from 'styled-components';

const mainTheme = {
  colors: {
    white: '#FAFAFA',
    black: '#212529',
    blue: '#185ADB',
    lightBlue: '#00AAFF',
    yellow: '#FFC947',
    grey: '#E8E8E8',
    darkGrey: '#444444',
    lightBlack: '#2b2b2b',
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

  margins: {
    s: '0.4rem',
  },

  mixins: {
    view: css`
      height: 100vh;
      overflow: hidden;
    `,
  },
};

export default mainTheme;
