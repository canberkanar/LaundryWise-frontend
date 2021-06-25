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
import RoomInfoComponent from "./RoomInfoComponent";
import MenuRoomInfoComponent from "./MenuRoomInfoComponent";

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


function MenuInfoComponent(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);


    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid>
                            <Typography align="left">
                                JVS Arriott Hotel's Laundry Rooms
                            </Typography>

                            <br/>
                            <MenuRoomInfoComponent
                                isLoggedIn={!!user.user}
                                isAdmin={!!user.user ? user.user.role === "admin" : false}
                                onMachineManagementClick={props.onMachineManagementClick}
                                onRoomManagementClick={props.onRoomManagementClick}
                            />

                            <br/>
                            <MenuRoomInfoComponent
                                isLoggedIn={!!user.user}
                                isAdmin={!!user.user ? user.user.role === "admin" : false}
                                onMachineManagementClick={props.onMachineManagementClick}
                                onRoomManagementClick={props.onRoomManagementClick}
                            />

                        </Grid>

                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default MenuInfoComponent;