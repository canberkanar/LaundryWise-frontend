import {Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
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
    const stats = useSelector((state) => state.statistics);
    let {match, getStatistics} = props;

    let [chartData, setChartData] = useState(
        [
            { type: 'Washer Usage', usageData: -1 },
            { type: 'Dryer Usage', usageData: -1 },
            { type: 'Total Usage', usageData: -1 }
        ]
    );

    useEffect(() => {
        getStatistics(user.user._id);
    }, [])

    useEffect(() => {
        let xyz = [
            { type: 'Washer Usage', usageData: stats.value && stats.value.washerCount ? stats.value.washerCount : 0 },
            { type: 'Dryer Usage', usageData: stats.value && stats.value.dryerCount ? stats.value.dryerCount : 0 },
            { type: 'Total Usage', usageData: stats.value && stats.value.totalCount ? stats.value.totalCount : 0 }
        ];
        setChartData(xyz);
        console.log("The Stats Are:");
        console.log(chartData);
    }, [stats])


    return ((chartData[0].usageData === -1) ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Usage Statistics</title>
            </Helmet>
            {/*<h1>*/}
            {/*    {user.user.username}*/}
            {/*</h1>*/}
            {/*<h3>*/}
            {/*    Total hours machines have been used:*/}
            {/*    {stats.value.totalCount}*/}
            {/*</h3>*/}
            {/*<h3>*/}
            {/*    Total hours washer machines have been used:*/}
            {/*    {stats.value.washerCount}*/}
            {/*</h3>*/}
            {/*<h3>*/}
            {/*    Total hours dryer machines have been used:*/}
            {/*    {stats.value.dryerCount}*/}
            {/*</h3>*/}
            <br/>
            <Paper>
                <Chart
                    data={chartData}
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
