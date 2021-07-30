import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Form from '../../components/Form';
import SectionHeading from '../../components/SectionHeading';
import Heading from '../../components/Heading';
import AnimatedText from '../../components/AnimatedText';
import Link from '../../components/Link';
import { sectionTypes, contactData } from '../../helpers';
import {
  StyledContact,
  StyledContactWrapper,
  StyledHeadingWrapper,
  StyledInner,
} from './StyledContact';

const Contact = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledContact id={sectionTypes.contact}>
      <SectionHeading sectionType={sectionTypes.contact} sectionId={sectionId}>
        Contact
      </SectionHeading>
      <StyledHeadingWrapper>
        <Heading headingType="h1" color="white">
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
        </Heading>
      </StyledHeadingWrapper>
      <StyledContactWrapper>
        <StyledInner>
          <Heading marginBottom="s" color="white">
            Send me a message:
          </Heading>
          <Form />
        </StyledInner>
        <StyledInner>
          <Heading marginBottom="s" color="white">
            Email me:
          </Heading>
          <Link href={`mailto:${contactData.email}`} color="white">
            {`${contactData.email}`}
          </Link>
        </StyledInner>
        <StyledInner>
          <Heading marginBottom="s" color="white">
            Phone me:
          </Heading>
          <Link href={`tel:${contactData.phone}`} color="white">
            {`${contactData.phone}`}
          </Link>
        </StyledInner>
      </StyledContactWrapper>
    </StyledContact>
  );
};

export default Contact;
