import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import Loading from "../components/Loading";

function RevenueStatistics() {

    const user = useSelector((state) => state.user);

    useEffect(() => {
        // trigger room load from backend
        console.log("GET IN TO REVENUE STATISTICS")
        console.log(user);
    }, []);


    return (!user ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Revenue Statistics</title>
            </Helmet>
            <h1>
                {user.user.username}
            </h1>
            <br/>
            <Paper>
                <h1>Revenue Statistics</h1>
            </Paper>

        </div>
    );
}

// export default RevenueStatistics;
export default connect()(RevenueStatistics);

// export default connect()(withRouter(UserLoginView));
