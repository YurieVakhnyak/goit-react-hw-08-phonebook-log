import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Phonebook, ContactTitle, TitlePhonebook } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Phonebook>
  );
};
