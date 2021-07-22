
import React, {useEffect} from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch, RadioGroup, Radio, Button,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import {useSelector} from "react-redux";
import SaveIcon from "@material-ui/icons/Save";

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
    addButton: {
        marginLeft: theme.spacing(1),
    },
}));


function MachineInRoomInfoComponent(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);

    const handleRadioChange = (event) => {
        props.passSelectedMachineTypeToParent(event.target.value);
    };
    const theRoom = props.theRoom;
    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid item xs={12}>
                            <Typography>{theRoom.address}</Typography>
                        </Grid>
                        <br/><br/><br/><br/>
                        {/*isAdmin must be fed in from parent view as parameter*/}
                        {/*isAdmin={!!user.user ? user.user.role === "admin" : false}*/}
                        <Grid id="LaundryRoomActiveGrid" container xs={6}>
                            <Button
                                className={classes.addButton}
                                variant="contained"
                                color="primary"
                                // onClick={onRegister}
                                type="submit"
                                startIcon={<AddIcon/>}
                            >
                                Add
                            </Button>

                        <RadioGroup aria-label="gender" name="gender1" value={props.selectedMachineType}
                                    onChange={handleRadioChange}>
                            <FormControlLabel value="washer" control={<Radio/>} label="Washing Machines"/>
                            <FormControlLabel value="dryer" control={<Radio/>} label="Dryer Machines"/>
                        </RadioGroup>
                        </Grid>
                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default MachineInRoomInfoComponent;