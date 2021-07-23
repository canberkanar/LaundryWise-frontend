import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import Loading from "../components/Loading";
import {getStatistics} from "../redux/actions";


function RevenueStatistics(props) {

    const user = useSelector((state) => state.user);
    const stats = useSelector((state) => state.statistics);
    let {match, getStatistics} = props;

    useEffect(() => {
        // trigger room load from backend
        getStatistics(user.user._id);
        console.log("GET IN TO REVENUE STATISTICS")
        console.log(stats);
    }, []);


    return (!stats.value ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Revenue Statistics</title>
            </Helmet>
            <h3>
                Total revenue machines have been used:
                {stats.value.totalCount}
            </h3>
            <h3>
                Total revenue washer machines have been used: 
                {stats.value.washerCount}
            </h3>
            <h3>
                Total revenue dryer machines have been used:
                {stats.value.dryerCount}
            </h3>
            <br/>
            <Paper>
                <h1>Revenue Statistics</h1>
            </Paper>

        </div>
    );
}

export default connect(null, {getStatistics})(
    RevenueStatistics
);