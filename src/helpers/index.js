import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie.svg';
import { ReactComponent as PanelIcon } from '../assets/icons/admin.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/house.svg';

import tsLogo from '../assets/icons/ts.svg';
import sassLogo from '../assets/icons/sass.svg';
import css3Logo from '../assets/icons/css3.svg';
import gitLogo from '../assets/icons/git.svg';
import jsLogo from '../assets/icons/js.svg';
import reduxLogo from '../assets/icons/redux.svg';

export const spiningElements = [
  {
    size: 67,
    duration: 20,
    icon: gitLogo,
  },
  {
    size: 36,
    duration: 13,
    icon: sassLogo,
  },
  {
    size: 49,
    duration: 17,
    icon: css3Logo,
  },
  {
    size: 81,
    duration: 25,
    icon: jsLogo,
  },
  {
    size: 26,
    duration: 11,
    icon: tsLogo,
  },
  {
    size: 16,
    duration: 9,
    icon: reduxLogo,
  },
];

export const buttonTypes = {
  text: 'text',
  hamburger: 'hamburger',
  icon: 'icon',
};

export const sectionTypes = {
  home: 'home',
  projects: 'projects',
  about: 'about',
  contact: 'contact',
};

export const contactData = {
  email: 'bartkiewicz.krzysztof84@gmail.com',
  phone: '+48 796 459 623',
  githubUrl: 'https://github.com/KrzysztofBartkiewicz',
  linkedinUrl: 'https://www.linkedin.com/in/krzysztof-bartkiewicz-71bb25217',
};

export const portfolioGitHubUrl = `https://github.com/KrzysztofBartkiewicz/portfolio`;

export const projectsData = [
  {
    title: 'Admin panel',
    description:
      'Admin panel made in React. Uses firestore database and firebase authorisation. Includes mailbox based on Gmail API, charts, weather widget etc.',
    icon: PanelIcon,
    demoUrl: 'https://react-admin-panel-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-admin-panel',
  },
  {
    title: 'React shop',
    description:
      'Fake React shop uses same database as Admin panel app. Provides basic functionalities such as shopping cart, filtering by several categories and searching products.',
    icon: ShopIcon,
    demoUrl: 'https://react-shop-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-shop',
  },
  {
    title: 'Movie app',
    description: 'Simple app fetching and presenting movie data for user.',
    icon: MovieIcon,
    demoUrl: 'https://movie-react-app-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/movie-app',
  },

  {
    title: 'Smart home',
    description: 'Simple app simulating contol of home devices',
    icon: HomeIcon,
    demoUrl: 'https://smart-home-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/smart-home-app',
  },
];
