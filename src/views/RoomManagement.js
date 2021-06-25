/**
 * @author canberk.anar
 */

import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect} from "react-redux";

function RoomManagement() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Room Management</title>
            </Helmet>

            <br/>
            <Paper>
                <h1>Room Management</h1>
            </Paper>
        </div>
    );
}

// export default MachineManagement;
export default connect()(RoomManagement);

