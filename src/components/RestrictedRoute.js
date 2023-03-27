import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useAuth();
  console.log(`Restricted ${redirectTo}`);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
