import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { StyledForm } from './StyledForm';
import { buttonTypes } from '../../helpers';

const initialValue = {
  email: '',
  topic: '',
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
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        label="email"
        type="email"
        value={inputValue.email}
        onChangeFn={handleChange}
      />
      <Input
        label="topic"
        type="text"
        value={inputValue.topic}
        onChangeFn={handleChange}
      />
      <Input
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
