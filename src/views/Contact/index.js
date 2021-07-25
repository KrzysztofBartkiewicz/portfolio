import React, { forwardRef } from 'react';
import { StyledContact } from './StyledContact';

const Contact = forwardRef((props, ref) => {
  return (
    <StyledContact ref={ref} id="contact">
      <button
        style={{ width: '100px', height: '100px' }}
        onClick={props.onClickFn}
      ></button>
    </StyledContact>
  );
});

export default Contact;
