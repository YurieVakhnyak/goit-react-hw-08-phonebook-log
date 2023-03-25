import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Phonebook, ContactTitle, TitlePhonebook } from './Contacts.styled';

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
        <b>Request in progress...</b>
      )}
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Phonebook>
  );
}

//  return (
//     <Phonebook>
//       <TitlePhonebook>Phonebook</TitlePhonebook>
//       <ContactForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactTitle>Contacts</ContactTitle>
//       <Filter />
//       <ContactList />
//     </Phonebook>
//   );
//  <>

//       <Helmet>
//         <title>Your Contacts</title>
//       </Helmet>
//       <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//     </>
