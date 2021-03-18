import Profile from "./Profile"
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import { compose } from "redux";
import { setProfile, updateStatus } from "../../../redux/profileReducer";



const ProfileContainer = (props) => {
    useEffect(() => {
        // console.log(props);
        let userId = props.match.params.userId;
        if(!userId) userId = 1;
        props.setProfile(userId);
    }, []);

    return (
        <div>
            <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
export default compose(connect(mapStateToProps, { setProfile, updateStatus }),
withRouter,
withAuthRedirect)(ProfileContainer);