import {Button, Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect, useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import MenuInfoComponent from "../components/MenuInfoComponent";
import React, {useEffect} from "react";
import MenuStatsComponent from "../components/MenuStatsComponent";
import LaundryRoomService from "../services/LaundryRoomService";
import {getLaundryRoom, getLaundryRooms, getMovies} from "../redux/actions";
import {allLaundryRooms} from "../redux/reducers/laundryRoomReducer";


function MainMenu(props) {

    const user = useSelector((state) => state.user);
    const allLaundryRooms = useSelector((state) => state.allLaundryRooms);


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


    let {getLaundryRooms} = props;

    useEffect(() => {
        // trigger room load from backend
        getLaundryRooms();
        console.log(allLaundryRooms.laundryRooms);
        console.log("HELLO");
    }, [allLaundryRooms.laundryRooms]);

    const loadLaundryRooms = async () => {
        // trigger the redux action getMovies
        let lr = getLaundryRooms();
        console.log(lr);
    };

    return (
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

// export default MainMenu;
// export default connect(null,{getLaundryRooms})(MainMenu);
// export default connect()(withRouter(UserLoginView));
export default connect(null, {getLaundryRooms})(
    MainMenu
);