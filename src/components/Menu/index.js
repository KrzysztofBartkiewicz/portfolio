import React, { useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Power1 } from 'gsap/src/all';
import Heading from '../Heading';
import Button from '../Button';
import AppContext from '../../context/AppContext';
import { StyledLinks, StyledMenu, StyledMenuHeading } from './StyledMenu';
import { sectionTypes, contactData } from '../../helpers';
import Link from '../Link';

const Menu = () => {
  const menuRef = useRef(null);
  const { isMenuVisible, handleMenuVisibility, handleGoToPage } =
    useContext(AppContext);

  const [isAnimating, setIsAnimating] = useState(false);
  const tl = gsap.timeline();

  const [isMenuVisibleState, setIsMenuVisibleState] = useState(false);

  useEffect(() => {
    setIsMenuVisibleState(isMenuVisible);
  }, [isMenuVisible]);

  useEffect(() => {
    handleAnimation();
  }, [isMenuVisible]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = (e) => {
    setIsMenuVisibleState((prev) => {
      console.log(prev);
      if (prev) {
        menuRef.current.style.left = '0';
      } else {
        menuRef.current.style.left = `${-menuRef.current.offsetWidth}`;
      }
      menuRef.current.style.top = '0';
      menuRef.current.style.width = `${e.target.innerWidth}px`;
      return prev;
    });
  };

  const handleAnimation = () => {
    if (!isAnimating) {
      if (isMenuVisible) {
        tl.set(menuRef.current, { display: 'block' }).to(menuRef.current, {
          x: 0,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        });
      } else {
        tl.to(menuRef.current, {
          x: -menuRef.current.offsetWidth,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        }).set(menuRef.current, { display: 'none' });
      }
    }
  };

  const handleClickMenuBtn = (sectionId) => {
    handleMenuVisibility(false);
    handleGoToPage(sectionId);
  };

  return (
    <StyledMenu ref={menuRef}>
      <nav>
        <ul>
          <li>
            <Heading headingType="h4">Home section</Heading>
            <Button onClickFn={() => handleClickMenuBtn(sectionTypes.home)}>
              <StyledMenuHeading headingType="h1">Home</StyledMenuHeading>
            </Button>
          </li>
          <li>
            <Heading headingType="h4">My projects</Heading>
            <Button onClickFn={() => handleClickMenuBtn(sectionTypes.projects)}>
              <StyledMenuHeading headingType="h1">Projects</StyledMenuHeading>
            </Button>
          </li>
          <li>
            <Heading headingType="h4">Few words about me</Heading>
            <Button onClickFn={() => handleClickMenuBtn(sectionTypes.about)}>
              <StyledMenuHeading headingType="h1">About</StyledMenuHeading>
            </Button>
          </li>
          <li>
            <Heading headingType="h4">Contact me</Heading>
            <Button onClickFn={() => handleClickMenuBtn(sectionTypes.contact)}>
              <StyledMenuHeading headingType="h1">Contact</StyledMenuHeading>
            </Button>
          </li>
        </ul>
      </nav>
      <StyledLinks>
        <Link color="black" href={`mailto:${contactData.email}`}>
          {`${contactData.email}`}
        </Link>
        <Link
          color="black"
          href={`tel:${contactData.phone}`}
        >{`${contactData.phone}`}</Link>
      </StyledLinks>
    </StyledMenu>
  );
};

export default Menu;
