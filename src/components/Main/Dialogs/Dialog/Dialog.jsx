import classes from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';

const Dialog = (props) => {
    let dialogsElements = props.dialogData.map(dialog => <DialogItems name={dialog.name} id={dialog.id} />);
    return (
        <div className={classes.dialog}>
            {dialogsElements}
        </div>
    )

}

export default Dialog;