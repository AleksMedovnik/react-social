import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__menu}>
        <li className={classes.nav__item}>
          <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </li>
        <li className={classes.nav__item}><a href='#' className={classes.nav__item}>News</a></li>
        <li className={classes.nav__item}><a href='#' className={classes.nav__item}>Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;