import { Outlet } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.Layout}>
      <header className={css.Header}>
        <h1 className={css.Title}>Phonebook</h1>
        <Filter />
        <div className={css.Nav}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
