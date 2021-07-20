import {Button, Grid, TextareaAutosize, Typography} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import MenuInfoComponent from "../components/MenuInfoComponent";
import React, {useEffect} from "react";
import MenuStatsComponent from "../components/MenuStatsComponent";
import {getLaundryRooms} from "../redux/actions";
import Loading from "../components/Loading";


function MainMenu(props) {

    const user = useSelector((state) => state.user);
    const allLaundryRooms = useSelector((state) => state.allLaundryRooms);
    let {match, getLaundryRooms} = props;

    const onMachineManagementClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/machineManagement");
    };
    const onUsageStatsClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/usageStatistics");
    };
    const onRevenueStatsClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/revenueStatistics");
    };
    const onRoomManagementClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/roomManagement");
    };

    useEffect(() => {
        // trigger room load from backend
        getLaundryRooms();
    }, []);

    return (!allLaundryRooms.laundryRooms && !allLaundryRooms.error ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Main Menu</title>
            </Helmet>
            <br/>
            <Grid container id="LaundryRoomsGrid">
                <Grid item xs={10} id="RoomPanelGrid">
                    <MenuInfoComponent
                        isLoggedIn={!!user.user}
                        isAdmin={!!user.user ? user.user.role === "admin" : false}
                        onMachineManagementClick={onMachineManagementClick}
                        onRoomManagementClick={onRoomManagementClick}
                        laundryRooms = {allLaundryRooms.laundryRooms}

                    />
                </Grid>
                <br/>
                <Grid item xs={2} id="StatisticsGrid">

                    <MenuStatsComponent
                        isLoggedIn={!!user.user}
                        isAdmin={!!user.user ? user.user.role === "admin" : false}
                        onUsageStatsClick={onUsageStatsClick}
                        onRevenueStatsClick={onRevenueStatsClick}
                    />


                </Grid>
            </Grid>
        </div>
    );
}

export default connect(null, {getLaundryRooms})(
    MainMenu
);