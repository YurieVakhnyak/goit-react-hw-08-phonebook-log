import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Notify } from 'notiflix';

import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
  ContactButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    const filteredContacts = contacts.filter(
      contact => contact.name === nameValue
    );

    filteredContacts.length > 0
      ? Notify.info(`${nameValue} is allready in contacts`)
      : dispatch(addContact({ name: nameValue, number: numberValue }));
    form.reset();
  }

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <ContactLabel>
        Name
        <ContactInput
          type="text"
          placeholder="Enter contact name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters (less then 25), apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxlength="25"
          required
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <ContactInput
          type="tel"
          name="number"
          placeholder="Enter contact phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactLabel>
      <ContactButton type="submit">Add contact</ContactButton>
    </ContactFormStyled>
  );
};
