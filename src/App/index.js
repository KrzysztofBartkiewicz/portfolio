import React, { useEffect, useRef, useState } from 'react';
import Contact from '../views/Contact';
import Home from '../views/Home';
import Projects from '../views/Projects';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const appRef = useRef(null);
  const sections = useRef(null);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const app = appRef.current;
    sections.current = app.children;

    Array.from(app.children).forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        end: 'bottom top+=1',
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });
  }, []);

  useEffect(() => {
    gsap.to(window, {
      scrollTo: { y: activeSection, autoKill: false },
      duration: 1,
      onComplete: () => ScrollTrigger.getAll().forEach((st) => st.enable()),
    });
  }, [activeSection]);

  return (
    <div ref={appRef}>
      <Home />
      <Projects />
      <Contact
        onClickFn={() => {
          ScrollTrigger.getAll().forEach((st) => st.disable());
          setActiveSection(sections.current[0]);
        }}
      />
    </div>
  );
};

export default App;
