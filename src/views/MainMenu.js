import {Button, Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import MenuInfoComponent from "../components/MenuInfoComponent";
import React from "react";

function MainMenu() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Main Menu</title>
            </Helmet>

            <br/>
            <Grid container id="LaundryRoomsGrid">
                <Grid item xs={10} id="RoomPanelGrid">
                    <MenuInfoComponent/>
                </Grid>
                <br/>
                <Grid item xs={2} id="StatisticsGrid">

                    <Button variant="contained"> Usage Statistics </Button>
                    <br/>
                    <br/>
                    <Button variant="contained"> Revenue Statistics </Button>

                </Grid>
            </Grid>
        </div>
    );
}

export default MainMenu;
// export default connect()(withRouter(UserLoginView));
