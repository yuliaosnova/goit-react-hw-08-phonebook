import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.AuthContainer}>
      <NavLink className={css.Link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.Link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
