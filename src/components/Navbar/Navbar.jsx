import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__menu}>
        <li><NavLink to='/profile' className={`${classes.nav__item} ${classes.active}`}>Profile</NavLink></li>
        <li><NavLink to='/dialogs' className={classes.nav__item}>Messages</NavLink></li>
        <li><a href='#' className={classes.nav__item}>News</a></li>
        <li><a href='#' className={classes.nav__item}>Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;