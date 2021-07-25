import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import MenuInfoComponent from "../components/MenuInfoComponent";
import React, {useEffect} from "react";
import MenuStatsComponent from "../components/MenuStatsComponent";
import {getLaundryRoom, getLaundryRooms} from "../redux/actions";
import Loading from "../components/Loading";
import {getAnnouncements} from "../redux/actions/announcementActions";


function MainMenu(props) {

    const user = useSelector((state) => state.user);
    let isLoggedIn = !!user.user;
    let isAdmin = !!user.user ? user.user.role === "admin" : false;

    const onUsageStatsClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/usageStatistics");
    };
    const onRevenueStatsClick = () => {
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/revenueStatistics");
    };
    const onRoomManagementClick = (childData) => {
        console.log("The passed data childData to MachineSettings:")
        console.log(childData);
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/machineSettings", childData);
    };
    const onMachineManagementClick = (childData) => {
        console.log("The passed data childData to MachineManagement:")
        console.log(childData);
        let data = {
            "laundryRoomId": childData._id
        }
        // navigate to an empty mask for entering details of the new movie
        props.history.push("/roomSettings", childData);
    };
    const onReservationsClick = (childData) => {
        // navigate to an empty mask for entering details of the new movie
        if(isAdmin){
            props.history.push("/admin/laundryroom/" + childData);
        }
        else{
            props.history.push("/reserve/" + childData);
        }
    };

    useEffect(() => {
        // trigger room load from backend
        if(!isLoggedIn){
            props.history.push("./login");
        }
    }, []);

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Main Menu</title>
            </Helmet>
            <h1>
                {user.role}
            </h1>
            <br/>
            <Grid container id="LaundryRoomsGrid">
                <Grid item xs={10} id="RoomPanelGrid">
                    <MenuInfoComponent
                        isLoggedIn={isLoggedIn}
                        isAdmin={isAdmin}
                        onMachineManagementClick={onMachineManagementClick}
                        onRoomManagementClick={onRoomManagementClick}
                        onReservationsClick={onReservationsClick}
                    />
                </Grid>
                <br/>

                {isAdmin ? (
                    <Grid item xs={2} id="StatisticsGrid">
                        <MenuStatsComponent
                            isLoggedIn={isLoggedIn}
                            isAdmin={isAdmin}
                            onUsageStatsClick={onUsageStatsClick}
                            onRevenueStatsClick={onRevenueStatsClick}
                        />
                    </Grid>
                    ) : null}

            </Grid>
        </div>
    );
}

export default connect(null, {getLaundryRooms, getAnnouncements, getLaundryRoom})(
    MainMenu
);