import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../components/Loading";
import React, {useEffect} from "react";
import {getStatistics} from "../redux/actions";


function UsageStatistics(props) {

    const user = useSelector((state) => state.user);
    console.log(user.user._id);
    const stats = useSelector((state) => state.statistics);
    let {match, getStatistics} = props;

    useEffect(() => {
        
        getStatistics("60fa0761fe8d124bba559880");
        console.log("GET IN TO USAGE STATISTICS");
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
                {stats.value.dryerCount}
            </h3>
            <br/>
            <Paper>
                <h1>Usage Statistics</h1>
            </Paper>

        </div>
    );
}

export default connect(null, {getStatistics})(
    UsageStatistics
);
