import React, { useEffect, useRef, useState } from 'react';
import AppContext from '../context/AppContext';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Projects from '../views/Projects';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Pagination from '../components/Pagination';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

ScrollTrigger.config({ limitCallbacks: true });

const App = () => {
  const appRef = useRef(null);
  const sections = useRef(null);
  const scrollAnim = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const app = appRef.current;
    sections.current = app.children;

    Array.from(sections.current).forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        end: 'bottom top+=1',
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });
  }, []);

  useEffect(() => {
    scrollAnim.current = gsap.to(window, {
      scrollTo: { y: activeSection, autoKill: false },
      duration: 1,
      onComplete: () => {
        ScrollTrigger.getAll().forEach((st) => st.enable());
      },
    });
  }, [activeSection]);

  const handleGoToPage = (id) => {
    if (!scrollAnim.current.isActive()) {
      const node = Array.from(sections.current).find(
        (section) => section.id === id
      );
      setActiveSection(node);
      ScrollTrigger.getAll().forEach((st) => st.disable());
    }
  };

  const contextValue = {
    handleGoToPage,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div ref={appRef}>
        <Home id={activeSection ? activeSection.id : null} />
        <Projects />
        <Contact />
      </div>
      <Pagination
        onClickFn={handleGoToPage}
        id={activeSection ? activeSection.id : null}
      />
    </AppContext.Provider>
  );
};

export default App;
