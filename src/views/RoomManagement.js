import {Grid, Paper, TextField} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
import MachineInRoomInfoComponent from "../components/MachineInRoomInfoComponent";
import React, {useEffect, useState} from "react";
import MachinesInRoomTableComponent from "../components/MachinesInRoomTableComponent";
import {getAllMachinesInRoom, getLaundryRooms, getRoom} from "../redux/actions";
import Loading from "../components/Loading";


function RoomManagement(props) {


    const user = useSelector((state) => state.user);

    const [selectedMachineType, setSelectedMachineType] = useState("washer");

    const theRoom = props.location.state;

    let {match, getAllMachinesInRoom} = props;

    useEffect(() => {
        getAllMachinesInRoom(theRoom._id, selectedMachineType);
    }, [match.params, selectedMachineType, theRoom._id]);

    const onMachineClicked = () => {
        props.history.push("/addMachine",theRoom); // navigates the user to the Machine Details Page
    };
    const allMachines = useSelector((state) => state.selectMachinesInRoom.machines);


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
                                                    passSelectedMachineTypeToParent={setSelectedMachineType}
                                                    theRoom={theRoom}/>

                    </Grid>
                    <br/>
                    <Grid item xs={10} id="MachinesTable">
                        <MachinesInRoomTableComponent onMachineClicked = {onMachineClicked} theRoom={theRoom} allMachines = {allMachines}/>
                    </Grid>
                </Grid>
            </div>
    );
}

// export default MachineManagement;
export default connect(null, {getLaundryRooms, getRoom, getAllMachinesInRoom})(
    RoomManagement
);

