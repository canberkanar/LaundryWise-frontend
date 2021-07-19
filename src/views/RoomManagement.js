/**
 * @author canberk.anar
 */

import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect} from "react-redux";
import MachineInRoomInfoComponent from "../components/MachineInRoomInfoComponent";
import {useState} from "react";
import MachinesInRoomTableComponent from "../components/MachinesInRoomTableComponent";

function RoomManagement(props) {
    const [selectedMachineType, setSelectedMachineType] = useState("washer");
    return (
        <div>
            <Helmet>
                <title>LaundryWise | Room Machine Management</title>
            </Helmet>
            <Grid container id="MachineInRoom">
                <Grid item xs={2} id="RoomInfoGrid">
                    <MachineInRoomInfoComponent selectedMachineType={selectedMachineType} passSelectedMachineTypeToParent={setSelectedMachineType}/>

                </Grid>
                <br/>
                <Grid item xs={10} id="MachinesTable">
                    <MachinesInRoomTableComponent/>
                </Grid>
            </Grid>
        </div>
    );
}

// export default MachineManagement;
export default connect()(RoomManagement);

