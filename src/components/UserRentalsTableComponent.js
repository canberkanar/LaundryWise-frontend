import React, {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MachineService from "../services/MachineService";
import {connect, useSelector} from "react-redux";
import {getUserRentals} from "../redux/actions";
import Loading from "./Loading";
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




function UserRentalsTableComponent(props) {
    // const machines = props.theRoom.machines;
    const classes = useStyles();
    // console.log(machines);

    let allRentals = props.allRentals;
    console.log("AAAAAAAAA");
    console.log(props);
    console.log(allRentals);
    // let allRentals = [
    //     {
    //         "_id": "60fc0dc531098d80d159eb83",
    //         "machine": "60fc0dc031098d80d159b314",
    //         "machineType": "washer",
    //         "allocatedTime": "60fc0dbf31098d80d159ad76",
    //         "payment": "60fc0dc531098d80d159eb81",
    //         "customer": "60fc0dbf31098d80d159ad53",
    //         "serviceProvider": "60fc0dbf31098d80d159ad4d",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "60fc0dc531098d80d159eb8a",
    //         "machine": "60fc0dc031098d80d159b314",
    //         "machineType": "washer",
    //         "allocatedTime": "60fc0dbf31098d80d159ad76",
    //         "payment": "60fc0dc531098d80d159eb88",
    //         "customer": "60fc0dbf31098d80d159ad53",
    //         "serviceProvider": "60fc0dbf31098d80d159ad4d",
    //         "__v": 0
    //     }
    // ]
    return ( !allRentals ? <Loading/> :
    // return ( 
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Machine Number</TableCell>
                        <TableCell>Machine Type</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allRentals.map((rental) => (
                        <TableRow key="test">
                            <TableCell component="th" scope="row">
                                {Date(rental.date).toString()}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {rental.machineNumber}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {rental.machineType}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {rental.price}
                            </TableCell>
                            <TableCell>
                            {props.isRemoveNeeded ? (
                                <Button
                                    color="primary"
                                    onClick={() => props.onClick(rental)}
                                >
                                    Cancel
                                </Button>
                            ): null}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default connect(null, {getUserRentals})(
    UserRentalsTableComponent
);