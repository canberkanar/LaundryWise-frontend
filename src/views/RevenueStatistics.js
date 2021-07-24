import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Loading from "../components/Loading";
import {getStatistics} from "../redux/actions";
import {ArgumentAxis, BarSeries, Chart, Title, ValueAxis} from "@devexpress/dx-react-chart-material-ui";


function RevenueStatistics(props) {

    const user = useSelector((state) => state.user);
    const stats = useSelector((state) => state.statistics);
    let {match, getStatistics} = props;

    let [chartData, setChartData] = useState(
        [
            { type: 'Washer Revenue', usageData: -1 },
            { type: 'Dryer Revenue', usageData: -1 },
            { type: 'Total Revenue', usageData: -1 }
        ]
    );

    useEffect(() => {
        getStatistics(user.user._id);
    }, [])

    useEffect(() => {
        let xyz = [
            { type: 'Washer Revenue', usageData: stats.value && stats.value.washerRevenue ? stats.value.washerRevenue : 0 },
            { type: 'Dryer Revenue', usageData: stats.value && stats.value.dryerRevenue ? stats.value.dryerRevenue : 0 },
            { type: 'Total Revenue', usageData: stats.value && stats.value.totalRevenue ? stats.value.totalRevenue : 0 }
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
    RevenueStatistics
);