/**
 * @author canberk.anar
 */

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';

import {
    Paper,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup
} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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

function ReservationFilterComponent(props) {

    const classes = useStyles();

    // Switch's State
    //radio
    const handleRadioChange = (event) => {
        props.passSelectedMachineTypeToParent(event.target.value);
    };

    const handleDateChange = (date) => {
        props.passSelectedDateToParent(date);
    };

    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container id="WorkingHoursGrid">
                            <Grid item xs={5} id="DaysOfWeek">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Days of the week</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender1" value={props.selectedMachineType}
                                                onChange={handleRadioChange}>
                                        <FormControlLabel value="washer" control={<Radio/>} label="Washing Machines"/>
                                        <FormControlLabel value="dryer" control={<Radio/>} label="Dryer Machines"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={7} id="ActiveTimeInterval">

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="time-from"
                                    format="dd/MM/yyyy"
                                    value={props.selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                    min
                                />
                            </Grid>
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>
            </Paper></div>
    );
}

export default ReservationFilterComponent;
