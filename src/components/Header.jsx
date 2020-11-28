import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href='#'>
          <img className={`${classes.logo__img} ${classes.header__img}`} src='https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573' />
        </a>
        <h1><a href='#' className={classes.logo__link}>Tip-Top</a></h1>
      </div>

      <form className={classes.header__search}>
        <input type='search' name="user" placeholder='Веедите поисковый запрос' autocomplete='on' className={classes.search} />
      </form>

      <a className={classes.shop} href='#'>shop</a>

      <div className={classes.header__profile}>
        <b>Mark Zuckerberg</b>
        <img className={classes.header__img} src='https://3dnews.ru/assets/external/illustrations/2020/01/10/1001163/01.jpg' />
      </div>
    </header>
  );
};

export default Header;