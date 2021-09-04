import React, { useContext, useEffect, useRef, useState } from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Link from '../Link';
import AppContext from '../../context/AppContext';
import gsap from 'gsap';
import { Power1 } from 'gsap/src/all';
import { sectionTypes, contactData } from '../../helpers';
import {
  StyledLinks,
  StyledMenu,
  StyledMenuHeading,
  StyledList,
} from './StyledMenu';

const Menu = () => {
  const menuRef = useRef(null);
  const {
    isMenuVisible,
    handleMenuVisibility,
    handleGoToPage,
    setIsMenuAnimating,
    isMenuAnimating,
  } = useContext(AppContext);

  const [isMenuVisibleState, setIsMenuVisibleState] = useState(false);

  useEffect(() => {
    setIsMenuVisibleState(isMenuVisible);
    handleAnimation();
  }, [isMenuVisible]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setIsMenuVisibleState((prev) => {
      if (prev) {
        menuRef.current.style.left = '0';
      } else {
        menuRef.current.style.left = `${-menuRef.current.offsetWidth}`;
      }

      return prev;
    });
  };

  const handleAnimation = () => {
    const tl = gsap.timeline();

    if (!isMenuAnimating) {
      if (isMenuVisible) {
        tl.set(menuRef.current, { display: 'flex' }).to(menuRef.current, {
          x: 0,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsMenuAnimating(true),
          onComplete: () => setIsMenuAnimating(false),
        });
      } else {
        tl.to(menuRef.current, {
          x: -menuRef.current.offsetWidth,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsMenuAnimating(true),
          onComplete: () => setIsMenuAnimating(false),
        }).set(menuRef.current, { display: 'none' });
      }
    }
  };

  const handleClickMenuBtn = (sectionId) => {
    handleMenuVisibility(false);
    handleGoToPage(sectionId);
  };

  const renderList = () => (
    <StyledList>
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
    </StyledList>
  );

  const renderLinks = () => (
    <StyledLinks>
      <Link color="black" href={`mailto:${contactData.email}`}>
        {`${contactData.email}`}
      </Link>
      <Link
        color="black"
        href={`tel:${contactData.phone}`}
      >{`${contactData.phone}`}</Link>
    </StyledLinks>
  );

  return (
    <StyledMenu ref={menuRef}>
      {renderList()}
      {renderLinks()}
    </StyledMenu>
  );
};

export default Menu;
