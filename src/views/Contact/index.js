import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes } from '../../helpers';
import { StyledContact } from './StyledContact';

const Contact = ({ id }) => {
  return (
    <StyledContact id={sectionTypes.contact}>
      <SectionHeading sectionType={sectionTypes.contact} id={id}>
        Contact
      </SectionHeading>
    </StyledContact>
  );
};

export default Contact;
