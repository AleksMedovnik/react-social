import Profile from "./Profile"
import * as axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profileReducer";
import { withRouter } from "react-router-dom";


const ProfileContainer = (props) => {
    useEffect(() => {
        // console.log(props);
        let userId = props.match.params.userId;
        if (!userId) userId = 1;
        axios.get(`https://jsonplaceholder.typicode.com/photos/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            })
    }, []);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    )
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrl = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(WithUrl);