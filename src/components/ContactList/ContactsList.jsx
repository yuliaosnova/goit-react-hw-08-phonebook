import React, { useState } from 'react';
import css from './ContactList.module.css';
import { useGetContactByIdQuery, useGetContactsQuery } from 'redux/contactsSlice';
import ContactListItem from 'components/ContactListtem/ContactListItem';
import AddBtn from 'components/AddBtn/AddBtn';
import { useSelector } from 'react-redux';
import ModalEdit from 'components/FormEdit/ModalEdit';
import FormEdit from 'components/FormEdit/FormEdit';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const showEditModal = useSelector(state => state.showEditModal);
  console.log('ConTaCts', data)
  
 
  const filter = useSelector(state => state.filter);
  //   console.log('filter', filter)

  const [editingContactId, setEditContactId] = useState('');
  const getContactId = contactid => {
    setEditContactId(contactid);
  };
  
  const { data: contact } = useGetContactByIdQuery(editingContactId);
  console.log('contactId', editingContactId);
  console.log('editingContact', contact);


  function getFilteredContacts() {
    if (data) {
		
      return data.filter(item  =>
        (item.name ?? 'unknown').toLowerCase().includes(filter)
      );
    } else {
      return data;
    }
  }

  const filteredContacts = getFilteredContacts();
  console.log('filtereD', filteredContacts);

  return (
    <>
      {error && 'ERROR(('}
      {isLoading ? (
        <div className={css.Spinner}>Loading...</div>
      ) : (
        <div className={css.Container}>
          {/* <h2 className={css.Title}>Contacts</h2> */}
          <ul className={css.List}>
            {filteredContacts.map(item => (
              <li key={item.id} className={css.Item}>
                <ContactListItem item={item} getContactId={getContactId} />
              </li>
            ))}
          </ul>
          <AddBtn />
        </div>
      )}
		 {contact && showEditModal && (
        <ModalEdit>
          <FormEdit contactId={editingContactId} contact={contact} />
        </ModalEdit>
      )}
    </>
  );
};
