import classes from './Dialog.module.css';
import ava from '../../../../images/ava.png';
import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={classes.dialog__item}>
            <img src={ava} alt="Avatar" />
            <div className='post__input'>{props.name}</div>
        </NavLink>
    )
}

const dialogData = [
    { name: 'Alex', id: 1 },
    { name: 'Nataly', id: 2 },
    { name: 'Vasya', id: 3 },
    { name: 'Marie', id: 4 },
    { name: 'Lola', id: 5 },
    { name: 'Nelli', id: 6 },
    { name: 'Lora', id: 7 },
    { name: 'Bogdan', id: 8 }
];

let dialogsElements = dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);


const Dialog = (props) => {
    return (
        <div className={classes.dialog}>
            {dialogsElements}
        </div>
    )

}

export default Dialog;