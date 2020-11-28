import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__menu}>
        <li><a href='#' className={`${classes.nav__item} ${classes.active}`}>Profile</a></li>
        <li><a href='#' className={classes.nav__item}>Messages</a></li>
        <li><a href='#' className={classes.nav__item}>News</a></li>
        <li><a href='#' className={classes.nav__item}>Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;