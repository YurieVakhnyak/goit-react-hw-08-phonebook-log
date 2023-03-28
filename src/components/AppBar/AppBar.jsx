import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBarHeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarHeaderContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeaderContainer>
  );
};
