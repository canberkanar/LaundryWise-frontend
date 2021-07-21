import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../components/Loading";
import React, {useEffect} from "react";

function UsageStatistics() {

    const user = useSelector((state) => state.user);

    useEffect(() => {
        // trigger room load from backend
        console.log("GET IN TO USAGE STATISTICS")
        console.log(user);
    }, []);


    return (!user ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Usage Statistics</title>
            </Helmet>
            <h1>
                {user.user.username}
            </h1>
            <br/>
            <Paper>
                <h1>Usage Statistics</h1>
            </Paper>

        </div>
    );
}

// export default UsageStatistics;
export default connect()(UsageStatistics);
// export default connect()(withRouter(UserLoginView));
