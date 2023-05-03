import { ContactList } from 'components/ContactList/ContactsList';
import AddBtn from 'components/AddBtn/AddBtn';
import css from './Pages.module.css'

export default function Contacts() {
  return (
    <div className={css.Container}>
      {/* <h2>Your contacts</h2> */}
      <AddBtn />
      <ContactList />
    </div>
  );
}
