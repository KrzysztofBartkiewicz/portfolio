import { css } from 'styled-components';

const mainTheme = {
  colors: {
    white: '#FAFAFA',
    black: '#212529',
    blue: '#185ADB',
    lightBlue: '#00AAFF',
    yellow: '#d3b714',
    grey: '#A7BBC7',
    darkGrey: '#444444',
    lightBlack: '#2b2b2b',
    red: '#e73635',
  },

  fontSizes: {
    xxl: '7.5rem',
    xl: '3.3rem',
    l: '1.6rem',
    s: '1.3rem',
    xs: '0.9rem',
  },

  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },

  levels: {
    l1: 100,
    l2: 200,
    l3: 300,
    l4: 400,
  },

  margins: {
    leftMargin: '5%',
  },

  mq: {
    desktopSm: '@media screen and (max-width: 1385px)',
    tablet: '@media screen and (max-width: 1065px)',
    mobile: '@media screen and (max-width: 800px)',
  },

  mixins: {
    view: css`
      height: 100vh;
      overflow: hidden;
    `,
  },
};

export default mainTheme;
