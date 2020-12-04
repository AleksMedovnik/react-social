import classes from './Dialog.module.css';
import ava from '../../../../images/ava.png';

const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            <div className={classes.dialog__item}>
                <img src={ava} alt="Avatar" />
                <div>Danylo</div> 
            </div>

        </div>
    )

}

export default Dialog;