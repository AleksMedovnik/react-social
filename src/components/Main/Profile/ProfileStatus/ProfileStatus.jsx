import React, { useState } from "react";



const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activateEditmode = (check) => {
        setEditMode(check);
        if(!check) {
            props.updateStatus(status);
        }
    }
    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {
                !editMode ?
                    <div><span onDoubleClick={() => activateEditmode(true)}>{props.status}</span></div> :
                    <div><input onBlur={() => activateEditmode(false)} onChange={onChangeStatus} type="text" value={status} placeholder='Изменить статус' autoFocus/></div>
            }
        </div>
    )

}
export default ProfileStatus;