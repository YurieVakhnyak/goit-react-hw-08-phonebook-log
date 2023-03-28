import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';
import { UserMenuContainer, UserWellcomeText } from './UserMenu.styled';
import { DeleteButton } from 'components/ContactItem/ContactItem.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserWellcomeText>Welcome, {user.name}</UserWellcomeText>
      <DeleteButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </DeleteButton>
    </UserMenuContainer>
  );
};
