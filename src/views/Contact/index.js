import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Form from '../../components/Form';
import SectionHeading from '../../components/SectionHeading';
import AnimatedText from '../../components/AnimatedText';
import Link from '../../components/Link';
import { sectionTypes, contactData } from '../../helpers';
import {
  StyledContact,
  StyledContactWrapper,
  StyledHeadingWrapper,
  StyledInner,
  StyledContactHeading,
  StyledDataHeading,
} from './StyledContact';

const Contact = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  const renderHeadingWrapper = () => (
    <StyledHeadingWrapper>
      <StyledContactHeading headingType="h1">
        <AnimatedText
          slideUp={sectionId !== sectionTypes.contact}
          slideDown={sectionId === sectionTypes.contact}
        >
          Let's get in
        </AnimatedText>
        <AnimatedText
          slideUp={sectionId !== sectionTypes.contact}
          slideDown={sectionId === sectionTypes.contact}
        >
          touch
        </AnimatedText>
      </StyledContactHeading>
    </StyledHeadingWrapper>
  );

  const renderContactWrapper = () => (
    <StyledContactWrapper>
      <StyledInner>
        <StyledDataHeading color="white">Send me a message:</StyledDataHeading>
        <Form />
      </StyledInner>
      <StyledInner>
        <StyledDataHeading color="white">Email me:</StyledDataHeading>
        <Link href={`mailto:${contactData.email}`} color="white">
          {`${contactData.email}`}
        </Link>
      </StyledInner>
      <StyledInner>
        <StyledDataHeading color="white">Phone me:</StyledDataHeading>
        <Link href={`tel:${contactData.phone}`} color="white">
          {`${contactData.phone}`}
        </Link>
      </StyledInner>
    </StyledContactWrapper>
  );

  return (
    <StyledContact id={sectionTypes.contact}>
      <SectionHeading sectionType={sectionTypes.contact} sectionId={sectionId}>
        Contact
      </SectionHeading>

      {renderHeadingWrapper()}
      {renderContactWrapper()}
    </StyledContact>
  );
};

export default Contact;
