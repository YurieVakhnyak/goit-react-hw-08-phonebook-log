// export const getContacts = state => state.contacts;
// export const getFilterValue = state => state.filter.filterValue;

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter.filterValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  }
);

// const getVisibleContacts = (contacts, filterValue) => {
//   if (filterValue !== '') {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   }
//   return contacts;
// };
