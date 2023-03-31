import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { MdPhone } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { DeleteButton } from 'components/ContactItem/ContactItem.styled';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
} from 'components/ContactForm/ContactForm.styled';
import {
  ContactItemStyled,
  ContactName,
  Modal,
  OpenEdititorButton,
  Overlay,
  ButtonBox,
  EditButton,
} from 'components/ContactItem/ContactItem.styled';
import { deleteContact, editContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const onEditContact = () => {
    setIsEditing(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const editName = form.elements.editName.value;
    const editNumber = form.elements.editNumber.value;

    const reqBody = {
      id,
      name: editName,
      number: editNumber,
    };

    dispatch(editContact(reqBody));

    setContactName(editName);
    setContactNumber(editNumber);
    setIsEditing(false);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <ContactItemStyled key={id}>
      <MdPhone />
      <ContactName>
        {contactName} : {contactNumber}
      </ContactName>

      <OpenEdititorButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="button"
        onClick={onEditContact}
      >
        <FiEdit2 color={isHovered ? 'blue' : 'cadetblue'} />
      </OpenEdititorButton>
      <DeleteButton type="button" onClick={onDeleteContact}>
        Delete
      </DeleteButton>
      {isEditing && (
        <Overlay>
          <Modal>
            <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
              <ContactLabel>
                Edit name
                <ContactInput
                  type="text"
                  name="editName"
                  defaultValue={contactName}
                />
              </ContactLabel>
              <ContactLabel>
                Edit number
                <ContactInput
                  type="text"
                  name="editNumber"
                  defaultValue={contactNumber}
                />
              </ContactLabel>
              <ButtonBox>
                <EditButton type="submit">Save</EditButton>
                <EditButton type="button" onClick={onCancelEdit}>
                  Cancel
                </EditButton>
              </ButtonBox>
            </ContactFormStyled>
          </Modal>
        </Overlay>
      )}
    </ContactItemStyled>
  );
};
