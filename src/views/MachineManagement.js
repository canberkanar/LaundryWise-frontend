/**
 * @author canberk.anar
 */

import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect} from "react-redux";

function MachineManagement() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Machine Management</title>
            </Helmet>

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

