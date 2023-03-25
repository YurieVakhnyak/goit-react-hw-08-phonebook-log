import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/goit-react-hw-08-phonebook-log/register">Register</NavLink>
      <NavLink to="/goit-react-hw-08-phonebook-log/login">Log In</NavLink>
    </div>
  );
};
