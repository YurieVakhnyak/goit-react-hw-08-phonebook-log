import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/authOperation';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
  ContactButton,
} from 'components/ContactForm/ContactForm.styled';

export const RegisterForm = () => {
  const [tries, setTries] = useState('isFirstTry');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setTries('isNotFirstTry');
  };

  return (
    <div>
      {tries === 'isNotFirstTry' && (
        <p style={{ color: 'blue', textAlign: 'center', fontSize: '14px' }}>
          Please, try another name
        </p>
      )}
      <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
        <ContactLabel>
          Username
          <ContactInput type="text" name="name" />
        </ContactLabel>
        <ContactLabel>
          Email
          <ContactInput type="email" name="email" />
        </ContactLabel>
        <ContactLabel>
          Password
          <ContactInput type="password" name="password" />
        </ContactLabel>
        <ContactButton type="submit">Register</ContactButton>
      </ContactFormStyled>
    </div>
  );
};
