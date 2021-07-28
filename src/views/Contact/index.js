import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Form from '../../components/Form';
import SectionHeading from '../../components/SectionHeading';
import { sectionTypes } from '../../helpers';
import { StyledContact, StyledLeftWrapper } from './StyledContact';

const Contact = () => {
  const { activeSection } = useContext(AppContext);
  const sectionId = activeSection ? activeSection.id : null;

  return (
    <StyledContact id={sectionTypes.contact}>
      <SectionHeading sectionType={sectionTypes.contact} sectionId={sectionId}>
        Contact
      </SectionHeading>
      <StyledLeftWrapper>
        <Form />
      </StyledLeftWrapper>
    </StyledContact>
  );
};

export default Contact;
