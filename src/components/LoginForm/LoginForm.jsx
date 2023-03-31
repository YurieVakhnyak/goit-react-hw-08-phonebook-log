import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/authOperation';

import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
  ContactButton,
} from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const [tries, setTries] = useState('isFirstTry');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setTries('isNotFirstTry');
  };

  return (
    <div>
      {tries === 'isNotFirstTry' && (
        <p style={{ color: 'green', textAlign: 'center', fontSize: '13px' }}>
          Maybe wrong password? Try again
        </p>
      )}
      <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
        <ContactLabel>
          Email
          <ContactInput type="email" name="email" />
        </ContactLabel>
        <ContactLabel>
          Password
          <ContactInput type="password" name="password" />
        </ContactLabel>
        <ContactButton type="submit">Log In</ContactButton>
      </ContactFormStyled>
    </div>
  );
};
