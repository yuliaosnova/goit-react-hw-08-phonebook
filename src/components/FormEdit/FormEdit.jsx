import { useState } from 'react';
import css from './Edit.module.css';
import { useDispatch } from 'react-redux';
import { useUpdateContactMutation } from 'redux/contactsSlice';
import toast from 'react-hot-toast';
import { setShowEditModal } from 'redux/showEditModalSlice';

export default function FormEdit({ contact }) {
  console.log('CONTACT', contact);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [updateContact] = useUpdateContactMutation();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await updateContact({ name: name, phone: number, id: contact.id });
      toast.success('Contact updated!');
      dispatch(setShowEditModal());
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.FeedbackForm}>
        <label htmlFor={name}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
         //   placeholder={contact.name}
          id={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.InputForm}
        />

        <label htmlFor={number}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
         //   placeholder={contact.phone}
          id={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.InputForm}
        />
        <button type="submit" className={css.ButtonSubmit}>
          Save changes
        </button>
      </form>
    </>
  );
}
