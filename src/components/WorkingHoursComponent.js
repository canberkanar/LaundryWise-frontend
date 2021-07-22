/**
 * @author canberk.anar
 */

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';

import {Paper, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
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

function WorkingHoursComponent(props) {

    const classes = useStyles();

    // const [value, setValue] = React.useState('monday'); //state of radio
    // // Switch's State
    // //radio
    //
    // const [checked, setChecked] = React.useState(false);
    // const handleChangeCheckBox = (event) => {
    //     setChecked(event.target.checked);
    // }

    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };


    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container id="WorkingHoursGrid">

                <Grid item xs={7} id="ActiveTimeInterval">

                    <TimePicker
                        margin="normal"
                        id="time-from"
                        label="From:"

                        value={selectedStartDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    <TimePicker
                        margin="normal"
                        id="time-to"
                        label="To:"
                        value={selectedEndDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />

                </Grid>
            </Grid>


            <div className={classes.signUpRow + " " + classes.signUpButtons}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick = {() => props.onClick(selectedStartDate.getHours(), selectedEndDate.getHours())}
                >
                    Save
                </Button>
            </div>

        </MuiPickersUtilsProvider>
                </div></Paper></div>
    );
}


export default WorkingHoursComponent;