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


    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid container id="SettingsGrid">
                            <Grid item xs={6} id="RoomPanelGrid">

                                <Typography variant="h4" component="h2" align="left">
                                    Laundry Room 1 - Address
                                </Typography>
                                <br/>
                                <Typography align="left">
                                    Number of Operating Washing Machines: 3
                                </Typography>

                                <Typography align="left">
                                    Number of Operating Drying Machines: 2
                                </Typography>

                                <br/>
                                {/*<Button variant="contained"> Room Setings </Button>*/}
                                {props.isAdmin ? (
                                    <Button
                                        onClick={props.onRoomManagementClick}
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
                                        onClick={props.onMachineManagementClick}
                                        variant="contained"
                                        color="primary"
                                        className={classes.machineSettingsButton}
                                    >
                                        Machine Setings
                                    </Button>
                                ) : null}
                                <br/>
                                <Button variant="contained"> Reservations </Button>

                            </Grid>
                            <br/>
                            <Grid item xs={6} id="AnnouncementsGrid">
                                <MenuAnnouncementsComponent/>
                            </Grid>

                        </Grid>

                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default MenuRoomInfoComponent;