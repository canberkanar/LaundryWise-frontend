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
    const classes = useStyles();

    let allRentals = props.allRentals;
    console.log("User Rentals Table Component");
    console.log(props);
    console.log(allRentals);

    return ( !allRentals ? <Loading/> :

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        {props.isFuture ? (
                            <>
                                <TableCell>Machine Number</TableCell>
                                <TableCell>Machine Type</TableCell>
                            </>

                            ): null}
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
                            {props.isFuture ? (
                                <>
                                    <TableCell component="th" scope="row">
                                        {rental.machineNumber}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {rental.machineType}
                                    </TableCell>
                                </>

                                ): null}
                            <TableCell component="th" scope="row">
                                {rental.price}
                            </TableCell>
                            <TableCell>
                            {props.isFuture ? (
                                <Button
                                    color="primary"
                                    onClick={() => props.onClick(rental._id)}
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