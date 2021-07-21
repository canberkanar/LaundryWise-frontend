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

    const theRoom = props.location.state;
    console.log("COME INSIDE TO MACHINE MANAGEMENT");
    console.log(theRoom);

    const handleSave = (start, end) => {
    };

    return (!theRoom ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Machine Management</title>
            </Helmet>
            <br/>
            <Grid container id="MachineManagementGrid">
                <Grid item xs={5} id="RoomInfoGrid">
                    <RoomInfoComponent
                        room={theRoom}
                    />
                    <br/>
                    <WorkingHoursComponent
                        onClick={handleSave}
                    />
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

