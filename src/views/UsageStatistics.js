import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../components/Loading";
import React, {useEffect, useState} from "react";
import {getStatistics} from "../redux/actions";
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';


function UsageStatistics(props) {

    const user = useSelector((state) => state.user);
    console.log(user.user._id);
    const stats = useSelector((state) => state.statistics);
    let {match, getStatistics} = props;

    let [chartData, setChartData] = useState();

    useEffect(() => {
        console.log("GET IN TO USAGE STATISTICS");
        console.log(stats);
        getStatistics(user.user._id);
        // async function fetchMyAPI() {
        //     await getStatistics(user.user._id);
        // }
        // fetchMyAPI()
    }, [])

    useEffect(() => {
        let xyz = [
            { type: 'Washer Revenue', usageData: stats.value.washerCount ? stats.value.washerCount : 0 },
            { type: 'Dryer Revenue', usageData: stats.value.dryerCount ? stats.value.dryerCount : 0 },
            { type: 'Total Revenue', usageData: stats.value.totalCount ? stats.value.totalCount : 0 }
        ];

        setChartData(xyz);
        console.log("In use efffect 2");
        console.log(chartData);
    }, [stats.washerCount])


    console.log("Out");
    console.log(chartData);


    return (!stats.value ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Usage Statistics</title>
            </Helmet>
            <br/>
            <Paper>
                <h1>Usage Statistics</h1>
            </Paper>
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
                <Chart
                    data={chartData}
                    width={500}
                    height={300}
                >
                    <ArgumentAxis />
                    <ValueAxis max={7} />

                    <BarSeries
                        valueField="usageData"
                        argumentField="type"
                    />
                    <Title text="Usage Statistics" />
                </Chart>
            </Paper>


        </div>
    );
}

export default connect(null, {getStatistics})(
    UsageStatistics
);
