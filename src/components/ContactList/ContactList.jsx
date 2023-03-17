import { useSelector } from 'react-redux';
import {
  // selectContacts,
  // selectFilterValue,
  selectVisibleContacts,
} from '../../redux/selectors';
// import { persistStore } from 'redux-persist';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContacListStyled } from './ContactList.styled';

// const getVisibleContacts = (contacts, filterValue) => {
//   if (filterValue !== '') {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   }
//   return contacts;
// };

export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filterValue = useSelector(selectFilterValue);
  const visibleContacts = useSelector(selectVisibleContacts);
  // console.log(contacts, filterValue, visibleContacts);

  return (
    <ContacListStyled>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContacListStyled>
  );
};
