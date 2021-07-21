import {Grid, Paper, TextField} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
import MachineInRoomInfoComponent from "../components/MachineInRoomInfoComponent";
import React, {useState} from "react";
import MachinesInRoomTableComponent from "../components/MachinesInRoomTableComponent";
import {getLaundryRooms, getRoom} from "../redux/actions";
import Loading from "../components/Loading";


function RoomManagement(props) {


    const user = useSelector((state) => state.user);
    const [selectedMachineType, setSelectedMachineType] = useState("washer");

    console.log("COME INSIDE TO ROOM MANAGEMENT");

    const theRoom = props.location.state

    return (!theRoom && !theRoom.error ? <Loading/> :
            // !theRoom ? <Loading/> :
            <div>
                <Helmet>
                    <title>LaundryWise | Room Machine Management</title>
                </Helmet>
                <h1>
                    {theRoom.name}
                </h1>
                <Grid container id="MachineInRoom">
                    <Grid item xs={2} id="RoomInfoGrid">
                        <MachineInRoomInfoComponent selectedMachineType={selectedMachineType}
                                                    passSelectedMachineTypeToParent={setSelectedMachineType}/>

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
export default connect(null, {getLaundryRooms, getRoom})(
    RoomManagement
);

