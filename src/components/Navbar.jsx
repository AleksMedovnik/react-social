import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__menu}>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Messages</a></li>
        <li><a href='#'>News</a></li>
        <li><a href='#'>Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;