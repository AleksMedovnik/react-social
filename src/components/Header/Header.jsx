import classes from './Header.module.css';
import ava from '../../images/ava.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href='#'>
          <img className={`${classes.logo__img} ${classes.header__img}`} src={ava} />
        </a>
        <h1><a href='#' className={classes.logo__link}>Turn Mood</a></h1>
      </div>

      <form className={classes.header__search}>
        <input type='search' name="user" placeholder='Веедите поисковый запрос' autocomplete='on' className={classes.search} />
      </form>

      <a className={classes.shop} href='#'>shop</a>

      <div className={classes.header__profile}>
        <b>Alex Honey</b>
        <img className={classes.header__img} src={ava} />
      </div>
    </header>
  );
};

export default Header;