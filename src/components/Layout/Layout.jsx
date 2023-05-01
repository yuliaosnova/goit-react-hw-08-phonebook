import Filter from 'components/Filter/Filter';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.Layout}>
      <header className={css.Header}>
        <h1 className={css.Title}>Phonebook</h1>
        <Filter />
      </header>
      <main></main>
    </div>
  );
};
