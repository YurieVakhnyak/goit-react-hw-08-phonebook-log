import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
  ContactButton,
  ContactFormStyled,
} from 'components/ContactForm/ContactForm.styled';

export const ContactItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
    text-decoration-color: cadetblue;
  }

  & svg {
    color: cadetblue;
    margin-right: 10px;
  }
`;

export const ContactIcon = styled.svg`
  color: cadetblue;
  margin-right: 10px;
`;

export const ContactName = styled.p`
  margin-right: auto;
`;

export const DeleteButton = styled(ContactButton)`
  ${props => css`
    height: 20px;
  `}
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4%;
`;

export const EditButton = styled(ContactButton)`
  ${props => css`
    width: 48%;
  `}
`;

export const Modal = styled.div`
  display: block;
  z-index: 100;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 20px black;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;

  transition: opacity 1s ease;
`;
