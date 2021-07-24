import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../components/Loading";
import React, {useEffect} from "react";
import {getUserRentals} from "../redux/actions";



function UserProfile(props) {

    const user = useSelector((state) => state.user);
    console.log(user.user._id);
    const rentals = useSelector((state) => state.userRentals);
    let {match, getUserRentals} = props;

    useEffect(() => {
        // trigger room load from backend
        getUserRentals(user.user._id);
        console.log("GET IN TO USER RENTALS");
        console.log(rentals);
    }, [rentals]);


    return (!user.user ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Profile</title>
            </Helmet>
            <h3>
                Username:{user.user.username}
            </h3>
            <h3>
                Email:{user.user.email}
            </h3>
            <h3>
                Address:{user.user.address}
            </h3>
            <h3>
                Mobile Number:{user.user.mobileNumber}
            </h3>
            <h3>
                Laundrywise Code:{user.user.laundrywiseCode}
            </h3>
            <Paper>
                <h1>Profile</h1>
            </Paper>
        </div>
    );
}

export default connect(null, {getUserRentals})(
    UserProfile
);