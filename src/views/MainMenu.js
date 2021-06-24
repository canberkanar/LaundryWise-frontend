import {Button, Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import MenuInfoComponent from "../components/MenuInfoComponent";
import React from "react";
import MenuStatsComponent from "../components/MenuStatsComponent";

function MainMenu() {

    const user = useSelector((state) => state.user);

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
                    />
                </Grid>
                <br/>
                <Grid item xs={2} id="StatisticsGrid">

                    <MenuStatsComponent
                        isLoggedIn={!!user.user}
                        isAdmin={!!user.user ? user.user.role === "admin" : false}
                    />


                </Grid>
            </Grid>
        </div>
    );
}

export default MainMenu;
// export default connect()(withRouter(UserLoginView));
