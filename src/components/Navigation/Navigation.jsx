import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </NavContainer>
  );
};
