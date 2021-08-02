import React, { useEffect, useRef, useState } from 'react';
import AppContext from '../context/AppContext';
import Contact from '../views/Contact';
import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Pagination from '../components/Pagination';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import _ from 'lodash';
import { sectionTypes } from '../helpers';
import LogoContainer from '../components/LogoContainer';
import OnloadAnimation from '../components/OnloadAnimation';
import Menu from '../components/Menu';

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const appRef = useRef(null);
  const sections = useRef(null);
  const scrollAnim = useRef(null);

  const [state, setState] = useState({
    activeSection: null,
    position: 0,
    isScrolling: false,
    isMenuVisible: false,
  });

  const handleMenuVisibility = (value) => {
    setState((prev) => {
      return {
        ...prev,
        isMenuVisible: value,
      };
    });
  };

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);

    setState((prev) => {
      if (
        prev.position + delta >= 0 &&
        prev.position + delta <= 3 &&
        !prev.isMenuVisible
      ) {
        return {
          ...prev,
          position: prev.position + delta,
        };
      }
      return prev;
    });
  };

  useEffect(() => {
    if (sections.current) {
      const section = [...sections.current][state.position];
      setState((prev) => {
        return {
          ...prev,
          activeSection: section,
        };
      });
    }
  }, [state.position]);

  useEffect(() => {
    const app = appRef.current;
    sections.current = app.children;
    setState((prev) => ({ ...prev, activeSection: [...sections.current][0] }));

    window.addEventListener('wheel', _.debounce(handleScroll, 500));
    return () => {
      window.removeEventListener('wheel', _.debounce(handleScroll, 500));
    };
  }, []);

  useEffect(() => {
    scrollAnim.current = gsap.timeline();
    scrollAnim.current.to(window, {
      scrollTo: { y: state.activeSection, autoKill: false },
      duration: 1,
      onStart: () => setState((prev) => ({ ...prev, isScrolling: true })),
      onComplete: () => setState((prev) => ({ ...prev, isScrolling: false })),
    });
  }, [state.activeSection]);

  const handleGoToPage = (id) => {
    if (!scrollAnim.current.isActive()) {
      const getPosition = () => {
        switch (id) {
          case sectionTypes.projects:
            return 1;
          case sectionTypes.about:
            return 2;
          case sectionTypes.contact:
            return 3;

          default:
            return 0;
        }
      };
      setState((prev) => {
        return {
          ...prev,
          position: getPosition(),
        };
      });
    }
  };

  const contextValue = {
    handleGoToPage,
    handleMenuVisibility,
    isMenuVisible: state.isMenuVisible,
    activeSection: state.activeSection,
    isScrolling: state.isScrolling,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Menu />
      <OnloadAnimation />
      <LogoContainer />
      <Pagination />

      <div ref={appRef}>
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </AppContext.Provider>
  );
};

export default App;
