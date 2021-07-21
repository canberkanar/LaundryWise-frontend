/**
 * @author canberk.anar
 */

import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect} from "react-redux";
import Loading from "../components/Loading";
import React from "react";

function MachineManagement(props) {

    const theRoom = props.location.state
    console.log("COME INSIDE TO MACHINE MANAGEMENT");
    console.log(theRoom);

    return (!theRoom && !theRoom.error ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Machine Management</title>
            </Helmet>
            <h1>
                {theRoom.name}
            </h1>
            <br/>
            <Grid container id="MachineManagementGrid">
                <Grid item xs={5} id="RoomInfoGrid">
                    <RoomInfoComponent/>
                    <br/>
                    <WorkingHoursComponent/>
                </Grid>
                <br/>
                <Grid item xs={7} id="RoomAnnouncementsGrid">
                    <AnnouncementsComponent/>
                </Grid>
            </Grid>
        </div>
    );
}

// export default MachineManagement;
export default connect()(MachineManagement);

