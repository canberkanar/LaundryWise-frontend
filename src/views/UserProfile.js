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
    const stats = useSelector((state) => state.UserRentals);
    let {match, getUserRentals} = props;

    useEffect(() => {
        // trigger room load from backend
        getUserRentals(user.user._id);
        console.log("GET IN TO USER RENTALS");
        console.log(stats);
    }, []);


    return (!stats.value ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Usage Statistics</title>
            </Helmet>
            <h1>
                {user.user.username}
            </h1>
            <h3>
                Total hours machines have been used:
                {stats.value.totalCount}
            </h3>
            <h3>
                Total hours washer machines have been used: 
                {stats.value.washerCount}
            </h3>
            <h3>
                Total hours dryer machines have been used:
                {stats.value.dryerCount}
            </h3>
            <br/>
            <Paper>
                <h1>Usage Statistics</h1>
            </Paper>

        </div>
    );
}

export default connect(null, {getUserRentals})(
    UserProfile
);