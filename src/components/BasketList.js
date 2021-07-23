import React from "react";
import {
    IconButton,
    TableCell,
    TableRow
} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from "@material-ui/core/styles";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

/**
 * @author canberk.anar
 */

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function BasketList(props) {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday" ," Wednesday", "Thursday", "Friday", "Saturday"];

    const classes = useRowStyles();

    const [dialogOpen, setDialogOpen] = React.useState(false); // state of delete alert dialog

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogCancel = () => {
        setDialogOpen(false);
    };

    const handleDialogApprove = () => {
        setDialogOpen(false);
        props.onClickDeleteReservation(props.reservation)
    };

    return (
        <React.Fragment>
            <Dialog
                open={dialogOpen}
                onClose={handleDialogCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Warning!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to remove selected item from the basket?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDialogApprove} color="primary" autoFocus>
                        Approve
                    </Button>
                </DialogActions>
            </Dialog>


            <TableRow className={classes.root} key={props.key}>
                <TableCell>
                    {props.reservation.machineType} Machine No: {props.reservation.deviceNumberInRoom}
                    <br/>
                    {props.reservation.price } €
                </TableCell>


                <TableCell align="right" style={{width: '50%'}} rowSpan={2}>
                    <IconButton
                        onClick={(event) => handleDialogClickOpen()}
                        color="inherit">
                        <DeleteForeverIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>


            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={2}>
                    {daysOfWeek[props.reservation.startDate.getDay()]}   {props.reservation.startDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                    {" "} - {props.reservation.endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </TableCell>
            </TableRow>


            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={2}>

                </TableCell>
            </TableRow>

        </React.Fragment>
    );
}

export default BasketList;
