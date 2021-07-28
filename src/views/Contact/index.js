import React from 'react';
import Form from '../../components/Form';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes } from '../../helpers';
import { StyledContact, StyledLeftWrapper } from './StyledContact';

const Contact = ({ id }) => {
  return (
    <StyledContact id={sectionTypes.contact}>
      <SectionHeading sectionType={sectionTypes.contact} id={id}>
        Contact
      </SectionHeading>
      <StyledLeftWrapper>
        <Form />
      </StyledLeftWrapper>
    </StyledContact>
  );
};

export default Contact;
