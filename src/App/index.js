import React, { useEffect, useRef, useState } from 'react';
import AppContext from '../context/AppContext';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Pagination from '../components/Pagination';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import _ from 'lodash';
import { sectionTypes } from '../helpers';
import LogoContainer from '../components/LogoContainer';

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const appRef = useRef(null);
  const sections = useRef(null);
  const scrollAnim = useRef(null);

  const [activeSection, setActiveSection] = useState(null);
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);

    setPosition((prev) => {
      if (prev + delta >= 0 && prev + delta <= 2) {
        return prev + delta;
      }
      return prev;
    });
  };

  useEffect(() => {
    if (sections.current) {
      const section = [...sections.current][position];
      setActiveSection(section);
    }
  }, [position]);

  useEffect(() => {
    const app = appRef.current;
    sections.current = app.children;
    setActiveSection([...sections.current][0]);

    window.addEventListener('wheel', _.debounce(handleScroll, 500));
  }, []);

  useEffect(() => {
    scrollAnim.current = gsap.timeline();
    scrollAnim.current.to(window, {
      scrollTo: { y: activeSection, autoKill: false },
      duration: 1,
      onStart: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });
  }, [activeSection]);

  const handleGoToPage = (id) => {
    if (!scrollAnim.current.isActive()) {
      setPosition(() => {
        switch (id) {
          case sectionTypes.projects:
            return 1;
          case sectionTypes.contact:
            return 2;

          default:
            return 0;
        }
      });
    }
  };

  const contextValue = {
    handleGoToPage,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <LogoContainer isAnimating={isAnimating} />

      <div ref={appRef}>
        <Home id={activeSection ? activeSection.id : null} />
        <Projects id={activeSection ? activeSection.id : null} />
        <Contact id={activeSection ? activeSection.id : null} />
      </div>

      <Pagination
        onClickFn={handleGoToPage}
        id={activeSection ? activeSection.id : null}
      />
    </AppContext.Provider>
  );
};

export default App;
