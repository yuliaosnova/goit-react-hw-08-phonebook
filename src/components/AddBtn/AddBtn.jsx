import { useDispatch } from 'react-redux';
import { setShowModal } from 'redux/showModalSlice';
import css from './AddBtn.module.css';

const AddBtn = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setShowModal());
  };

  return (
    <button className={css.AddBtn} onClick={toggleModal}>
      ADD CONTACT
    </button>
  );
};

export default AddBtn;
