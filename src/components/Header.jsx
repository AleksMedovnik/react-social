import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img className={classes.header__logo} src='https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573' />
        <h1 className={classes.header__h1}>Tip-Top</h1>
      </header>
    );
};

export default Header;