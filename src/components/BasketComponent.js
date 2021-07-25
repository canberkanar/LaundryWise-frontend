/**
 * @author canberk.anar
 */

import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead,
    TableRow
} from "@material-ui/core";
import BasketList from "./BasketList";
import React from "react";
import EuroIcon from '@material-ui/icons/Euro';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TimeSlotToReservationMapper from "../mappers/TimeSlotToReservationMapper";


function BasketComponent(props) {

    let reservations = props.reservations;

    const [dialogOpen, setDialogOpen] = React.useState(false); // state of delete alert dialog

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogCancel = () => {
        setDialogOpen(false);
    };

    const handleDialogApprove = () => {
        setDialogOpen(false);
        props.reserve();
    };

    return (
        <React.Fragment>

            <Dialog
                open={dialogOpen}
                onClose={handleDialogCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Warning! You are about to pay!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please check and make sure that your reservations are correct. Once you approve, the fees will
                        automatically be charged to your German Bank Account in the form of SEPA Direct Debit (SDD) and
                        in case of cancel reservation, we will initiate the refund process in the next 14 days. 
                        <br/>
                        <br/>
                        Do you authorize the payment for the selected reservations?
                        <br/>
                        <br/>
                        <u>Note</u><br/>
                        SEPA Direct Debit transactions can take up to 3 business days until they are processed and reflected to your bank account.
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


            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colspan={2}>
                                    Reservation Basket
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservations.map((item, index) => {
                                return (
                                    <BasketList key={index} reservation={item}
                                                onClickDeleteReservation={props.onClickDeleteReservation}/>
                                );
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell style={{width: 200}}>
                                    <IconButton
                                        onClick={(event) => handleDialogClickOpen()}
                                        color="inherit">
                                        <EuroIcon/>
                                    </IconButton>
                                    Pay
                                </TableCell>
                                <TableCell align="right">Total Fee: {props.totalFee} €</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>
    );
}

// connect called to access router so when user clicks "New Recipe, we will be able to forward them to the relevant page"
export default BasketComponent;
