import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {Paper, Button, Grid} from "@material-ui/core";
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

    let startH = "0";
    let endH = "0";
    // Handle the error where when the start hour comes as 6, it makes ot 06 to concatanate in the date.
    if(props.room.operationStartHour < 10){startH = startH + props.room.operationStartHour.toString();}
    else{startH = props.room.operationStartHour.toString();}
    if(props.room.operationEndHour < 10){endH = endH + props.room.operationEndHour.toString();}
    else{endH = props.room.operationEndHour.toString();}

    let str = new Date('2014-08-18T'+ startH +':00:00');
    let end = new Date('2015-08-18T'+ endH +':00:00');
    const [selectedStartDate, setSelectedStartDate] = React.useState(str);
    const [selectedEndDate, setSelectedEndDate] = React.useState(end);

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
            <div>
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
            </div>
            <div>
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