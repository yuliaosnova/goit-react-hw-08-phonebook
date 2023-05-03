import React, { useState } from 'react';
import css from './ContactList.module.css';
import { useGetContactsQuery } from 'redux/contactsSlice';
import ContactListItem from 'components/ContactListtem/ContactListItem';
import { useSelector } from 'react-redux';
import ModalEdit from 'components/FormEdit/ModalEdit';
import FormEdit from 'components/FormEdit/FormEdit';
import Form from 'components/Form/Form';
import Modal from 'components/Modal/Modal';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log('get contacts', data);
  const showModal = useSelector(state => state.showModal);
  const showEditModal = useSelector(state => state.showEditModal);
  console.log('ConTaCts', data);

  const filter = useSelector(state => state.filter);

  const [editingContactId, setEditContactId] = useState('');
  const getContactId = contactid => {
    setEditContactId(contactid);
  };

  function getFilteredContacts() {
    if (data) {
      return data.filter(item =>
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
          <ul className={css.List}>
            {filteredContacts.map(item => (
              <li key={item.id} className={css.Item}>
                <ContactListItem item={item} getContactId={getContactId} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      {showEditModal && (
        <ModalEdit>
          <FormEdit contactId={editingContactId} />
        </ModalEdit>
      )}
    </>
  );
};
