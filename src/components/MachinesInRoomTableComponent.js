import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MachineInRoomInfoComponent from "./MachineInRoomInfoComponent";
import MachineService from "../services/MachineService";
import {connect, useSelector} from "react-redux";
import {getAllMachines, getLaundryRooms, getMachine, getRoom} from "../redux/actions";

let MACHINES_ =[     {
    "isActive": true,
    "machines": [
        "60f48d84240f7f049053bc1c"
    ],
    "_id": "60f48d5f240f7f049053b676",
    "name": "name-1",
    "address": "address-1",
    "operationStartHour": 6,
    "operationEndHour": 24,
    "__v": 0
},
    {
        "isActive": true,
        "machines": [
            "60f48d84240f7f049053bc1c"
        ],
        "_id": "60f48d5f240f7f049053b676",
        "name": "name-1",
        "address": "address-1",
        "operationStartHour": 6,
        "operationEndHour": 24,
        "__v": 0}];
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




function MachinesInRoomTableComponent(props) {
    const machines = props.theRoom.machines;
    const classes = useStyles();
    console.log(machines);

    const allMachines = useSelector((state) => state.selectMachines.machines);
    let {match, getAllMachines, getMachine} = props;

    useEffect(() => {
        getAllMachines();
        console.log('girdi ');
        // async function fetchMyAPI() {
        //     const response = await MachineService.getMachinesbyId();
        //     console.log(response);
        //     machines2.push(response)
        //     console.log(machines2)
        // }
        // fetchMyAPI()
    }, []);

    console.log(allMachines);
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Activity</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {allMachines.map((machine) => (
                        <TableRow key="test">
                            <TableCell component="th" scope="row">
                                {machine.machineType}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default connect(null, {getMachine, getAllMachines})(
    MachinesInRoomTableComponent
);