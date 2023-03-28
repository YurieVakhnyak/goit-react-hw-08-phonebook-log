import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
  ContactButton,
} from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
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
    form.reset();
  };

  return (
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
  );
};
