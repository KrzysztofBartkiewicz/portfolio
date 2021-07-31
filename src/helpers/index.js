import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie.svg';
import { ReactComponent as PanelIcon } from '../assets/icons/admin.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/house.svg';

export const buttonTypes = {
  text: 'text',
  hamburger: 'hamburger',
  icon: 'icon',
};

export const sectionTypes = {
  home: 'home',
  projects: 'projects',
  contact: 'contact',
};

export const contactData = {
  email: 'bartkiewicz.krzysztof84@gmail.com',
  phone: '+48 796 459 623',
};

export const projectsData = [
  {
    title: 'React shop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi',
    icon: ShopIcon,
    demoUrl: 'https://react-shop-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-shop',
  },
  {
    title: 'Movie app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi',
    icon: MovieIcon,
    demoUrl: 'https://movie-react-app-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/movie-app',
  },
  {
    title: 'Admin panel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi',
    icon: PanelIcon,
    demoUrl: '',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-admin-panel',
  },
  {
    title: 'Smart home',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi',
    icon: HomeIcon,
    demoUrl: 'https://smart-home-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/smart-home-app',
  },
];
