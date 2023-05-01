import { useDeleteContactMutation } from 'redux/contactsSlice';
import { BsTrash3 } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import css from './ContactListItem.module.css';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setShowEditModal } from 'redux/showEditModalSlice';

export const ContactListItem = ({ item, getContactId }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();

  const clickHandler = () => {
    deleteContact(item.id);
    toast.success('Contact deleted!');
  };

  const editClickHandler = () => {
    dispatch(setShowEditModal());
    getContactId(item.id);

  };

  return (
    <div className={css.Wrapper}>
      <button
        className={css.DeleteBtn}
        onClick={() => clickHandler(item.id)}
        disabled={isLoading}
      >
        <BsTrash3 />
      </button>
      <button
        className={css.EditBtn}
        onClick={() => editClickHandler(item.id)}
        disabled={isLoading}
      >
        <AiFillEdit />
      </button>
      <div className={css.Contacts}>
        <p className={css.Info}>
          <span className={css.Label}>Name:</span>{' '}
          <span className={css.Data}>{item.name}</span>
        </p>
        <p className={css.Info}>
          <span className={css.Label}>Phone:</span>
          <span className={css.Data}>{item.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactListItem;
