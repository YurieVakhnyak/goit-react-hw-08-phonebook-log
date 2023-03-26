import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContacListStyled } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContacListStyled>
      {visibleContacts ? (
        visibleContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>nich ne vudno!</p>
      )}
    </ContacListStyled>
  );
};
