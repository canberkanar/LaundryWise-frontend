/**
 * @author canberk.anar
 */

import React from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch,

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
    console.log("COME INSIDE TO ROOM INFO COMPONENT");
    const [checked, setChecked] = React.useState({
        value: props.room.isActive});
    let data = null;

    const changeRoomActivity = (ch) => {
        console.log("IS ACTIVE BUTTON TOGGLED");
        data = {"isActive": ch};
        console.log("Data");
        console.log(data);
        console.log("Room ID");
        console.log(props.room._id);
        updateLaundryRoom(props.room._id, data);
    };

    const handleChange = event => {
        setChecked(event.target.checked);
        changeRoomActivity(checked);
    };

    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid item xs={6}>
                            <Typography align="left">
                                {props.room.name}
                            </Typography>
                            <Typography>{props.room.address}</Typography>
                        </Grid>

                        {/*isAdmin must be fed in from parent view as parameter*/}
                        {/*isAdmin={!!user.user ? user.user.role === "admin" : false}*/}

                        {!props.isAdmin ? (
                            <Grid id="LaundryRoomActiveGrid" container xs={6}>

                                <FormControlLabel
                                    control={<Switch
                                        name="checkedB"
                                        inputProps={{'aria-label': 'primary checkbox'}}
                                        checked={checked}
                                        onChange={handleChange}
                                    />}
                                    label="Is the room active?"
                                />


                            </Grid>
                        ) : null}

                    </Grid>

                </div>
            </Paper>
        </div>
);
}

export default connect(null, {updateLaundryRoom})(
    RoomInfoComponent
);