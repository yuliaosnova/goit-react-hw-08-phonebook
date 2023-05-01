import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { setShowModal } from 'redux/showModalSlice';
// import 'react-toastify/dist/ReactToastify.min.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';


export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();

  const { data: contacts } = useGetContactsQuery();


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

  const handleSubmit = event => {
    event.preventDefault();

    const check = contacts.find(contact => contact.name === name);
    if (check) {
      toast.error(`${name} is already in contacts`);
    } else {
      addContact({ name, phone: number });
      toast.success('Contact added!');
		
      dispatch(setShowModal());
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.FeedbackForm}>
      <label htmlFor={name}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
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
        id={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.InputForm}
      />
      <button type="submit" className={css.ButtonSubmit}>
        Add contact
      </button>
      
    </form>
  );
}
