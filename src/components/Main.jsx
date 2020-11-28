import classes from './Main.module.css';

const Main = () => {
    return (
        <div className={classes.main}>
        <div>
          <img className={classes.main__avatar} src='https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573'>
          </img>
        </div>
        <div>Ava + description</div>
        <div className={classes.main__posta}>Posts
          <div>Post New</div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
          <div>Post 4</div>
          <div>Post 5</div>
        </div>
      </div>
    );
};
export default Main;