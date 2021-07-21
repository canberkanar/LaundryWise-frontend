import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let laundryRoom =     {
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
};
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(activity) {
    return { activity};
}

const rows = [
    createData(laundryRoom.name)
];

export default function BasicTable() {
    const classes = useStyles();
    console.log(rows);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Activity</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.activity}>
                            <TableCell component="th" scope="row">
                                {row.activity}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}