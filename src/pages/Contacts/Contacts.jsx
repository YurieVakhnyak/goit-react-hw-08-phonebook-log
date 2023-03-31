import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Modal } from 'components/ContactEditor/ContactEditor';
import {
  Phonebook,
  ContactTitle,
  TitlePhonebook,
  RequestText,
} from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      {isLoading && (
        //   !error &&
        <RequestText>Request in progress...</RequestText>
      )}
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
      {/* <Modal></Modal> */}
    </Phonebook>
  );
}
