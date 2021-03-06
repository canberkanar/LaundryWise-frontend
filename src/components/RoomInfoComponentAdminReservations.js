/**
 * @author canberk.anar
 */

import React, {useEffect} from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        // width: "500px",
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    signUpRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    signUpButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    signUpButton: {
        marginLeft: theme.spacing(1),
    },
}));


function RoomInfoComponentAdminReservations(props) {
    const classes = useStyles();

    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>
                        <Grid item xs={6}>
                            <Typography align="left"> {props.laundryroom.name} </Typography>
                            <Typography> {props.laundryroom.address} </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}

// attributes of props and their type
RoomInfoComponentAdminReservations.propTypes = {
    laundryroom: PropTypes.object
};

export default RoomInfoComponentAdminReservations;