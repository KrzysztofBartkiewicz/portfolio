import React, { useState } from 'react';
import Input from '../Input';
import { StyledForm } from './StyledForm';

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

  return (
    <StyledForm>
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
    </StyledForm>
  );
};

export default Form;
