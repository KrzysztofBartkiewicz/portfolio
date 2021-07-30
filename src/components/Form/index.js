import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { buttonTypes } from '../../helpers';
import emailjs from 'emailjs-com';
import { StyledForm } from './StyledForm';

const initialValue = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Form = () => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        inputValue,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => alert('Meassage has been sent.'))
      .catch(() => alert('Emailjs service error. Try again later.'));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        required
        label="name"
        type="text"
        value={inputValue.name}
        onChangeFn={handleChange}
      />
      <Input
        required
        label="email"
        type="email"
        value={inputValue.email}
        onChangeFn={handleChange}
      />
      <Input
        label="subject"
        type="text"
        value={inputValue.subject}
        onChangeFn={handleChange}
      />
      <Input
        required
        textArea
        label="message"
        value={inputValue.message}
        onChangeFn={handleChange}
      />
      <Button buttonType={buttonTypes.icon} icon={SendIcon} type="submit">
        Send message
      </Button>
    </StyledForm>
  );
};

export default Form;
