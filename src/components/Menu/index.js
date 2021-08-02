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
  const menu = menuRef.current;
  const tl = gsap.timeline();

  useEffect(() => {
    handleAnimation();
  }, [isMenuVisible]);

  const handleAnimation = () => {
    if (!isAnimating) {
      if (isMenuVisible) {
        tl.set(menu, { display: 'block' }).to(menu, {
          xPercent: 100,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        });
      } else {
        tl.to(menu, {
          xPercent: 0,
          duration: 1,
          ease: Power1.ease,
          onStart: () => setIsAnimating(true),
          onComplete: () => setIsAnimating(false),
        }).set(menu, { display: 'none' });
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
