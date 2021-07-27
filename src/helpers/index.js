import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg';
import { ReactComponent as MovieIcon } from '../assets/icons/movie.svg';
import { ReactComponent as PanelIcon } from '../assets/icons/admin.svg';

export const buttonTypes = {
  text: 'text',
  hamburger: 'hamburger',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi, placerat sit amet facilisis malesuada, sodales a lectus. Nunc vestibulum nibh eu massa efficitur facilisis. Sed ligula lacus, ultricies vel blandit ut, tristique nec nulla. Vestibulum vehicula nunc luctus magna ullamcorper, non egestas nisl ornare. Ut porta, quam vitae molestie hendrerit, elit justo dignissim lectus, at vestibulum magna libero a magna',
    icon: ShopIcon,
    demoUrl: 'https://react-shop-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-shop',
  },
  {
    title: 'Movie app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi, placerat sit amet facilisis malesuada, sodales a lectus. Nunc vestibulum nibh eu massa efficitur facilisis. Sed ligula lacus, ultricies vel blandit ut, tristique nec nulla. Vestibulum vehicula nunc luctus magna ullamcorper, non egestas nisl ornare. Ut porta, quam vitae molestie hendrerit, elit justo dignissim lectus, at vestibulum magna libero a magna',
    icon: MovieIcon,
    demoUrl: 'https://movie-react-app-portfolio.netlify.app',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/movie-app',
  },
  {
    title: 'Admin panel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar felis in tellus gravida, ac hendrerit mauris sollicitudin. Nullam ante nisi, placerat sit amet facilisis malesuada, sodales a lectus. Nunc vestibulum nibh eu massa efficitur facilisis. Sed ligula lacus, ultricies vel blandit ut, tristique nec nulla. Vestibulum vehicula nunc luctus magna ullamcorper, non egestas nisl ornare. Ut porta, quam vitae molestie hendrerit, elit justo dignissim lectus, at vestibulum magna libero a magna',
    icon: PanelIcon,
    demoUrl: '',
    githubUrl: 'https://github.com/KrzysztofBartkiewicz/react-admin-panel',
  },
];
