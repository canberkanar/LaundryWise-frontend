/**
 * @author canberk.anar
 */

import React from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch, Checkbox, Button,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {connect, useSelector} from "react-redux";
import {updateLaundryRoom} from "../redux/actions";

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

function RoomInfoComponent(props) {

    const classes = useStyles();
    const user = useSelector((state) => state.user);
    let {updateLaundryRoom} = props;
    let roomId = props.room._id;
    let roomState = props.room.isActive;
    console.log("Room ID:", roomId);
    console.log("Room State:", roomState);
    const [activation, setActivation] = React.useState(props.room.isActive);
    let data = null;


    const activationOnClick = () => {
        // navigate to an empty mask for entering details of the new movie
        console.log("ACTIVATION BUTTON TOGGLED");
        data = {"isActive": !activation};
        setActivation(!activation);
        console.log("Req Data: ", data);
        console.log("Room Id: ", roomId);
        updateLaundryRoom(roomId, data);
    };

    return (
        <Paper className={classes.signUpPaper} component="form">
            <Typography align="left" variant="h4">
                {props.room.name}
            </Typography>
            <Typography>{props.room.address}</Typography>
            <br/>
            <br/>
            <Button

                variant="contained"
                color="primary"
                onClick = {activationOnClick}
            >
                {!activation ? "Activate" : "Deactivate"}
            </Button>
        </Paper>
);
}

export default connect(null, {updateLaundryRoom})(
    RoomInfoComponent
);