import React, {useEffect} from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch, Button,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {useSelector} from "react-redux";
import MenuInfoComponent from "./MenuInfoComponent";
import RoomInfoComponent from "./RoomInfoComponent";
import AnnouncementsComponent from "./AnnouncementsComponent";
import MenuAnnouncementsComponent from "./MenuAnnouncementsComponent";

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


function MenuRoomInfoComponent(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const room = props.room;


    function handleMClick(xyz) {
        props.onMachineManagementClick(xyz); // pass any argument to the callback
    }

    function handleRClick(xyz) {
        props.onRoomManagementClick(xyz); // pass any argument to the callback
    }

    function handleRezClick(xyz) {
        console.log("REZ BUTTON PRESSED")
        console.log("THE ID IS:" + xyz)
        props.onReservationsClick(xyz); // pass any argument to the callback
    }


    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid container id="SettingsGrid">
                            <Grid item xs={8} id="RoomPanelGrid">

                                <Typography variant="h4" component="h2" align="left">
                                    {room.name}
                                </Typography>
                                <Typography variant="h6" component="h2" align="left">
                                    Address: {room.address}
                                </Typography>
                                <br/>
                                <Typography align="left">
                                    Number of Operating Machines: {room.machines.length}
                                    <br/>
                                    Operating Hours from {room.operationStartHour}:00 to {room.operationEndHour}:00
                                </Typography>

                                <br/>
                                {/*<Button variant="contained"> Room Setings </Button>*/}
                                {props.isAdmin ? (
                                    <Button
                                        name="MyButton"
                                        room={room.name}
                                        onClick = {() => handleRClick(props.room)}
                                        variant="contained"
                                        color="primary"
                                        className={classes.roomSettingsButton}

                                    >
                                        Room Settings
                                    </Button>
                                ) : null}
                                <br/>
                                {/*<Button variant="contained"> Machine Settings </Button>*/}
                                {props.isAdmin ? (
                                    <Button
                                        onClick = {() => handleMClick(props.room)}
                                        variant="contained"
                                        color="primary"
                                        className={classes.machineSettingsButton}
                                    >
                                        Machine Setings
                                    </Button>
                                ) : null}
                                <br/>

                                <Button
                                    onClick = {() => handleRezClick(room._id)}
                                    variant="contained"
                                >
                                    Reservations
                                </Button>

                            </Grid>
                            <br/>
                            <Grid item xs={4} id="AnnouncementsGrid">
                                <MenuAnnouncementsComponent
                                    room={room}
                                />
                            </Grid>

                        </Grid>

                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default MenuRoomInfoComponent;