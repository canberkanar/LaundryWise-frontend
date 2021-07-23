import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Paper,
    Button,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        width: "500px",
        padding: theme.spacing(2),
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

/**
 * For register new users
 * @param {props} props
 */
function SuccessComponent(props) {

    const classes = useStyles();

    return (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <Typography variant="h4" align="center">
                        Payment Succeeded!
                    </Typography>
                </div>
                <div className={classes.signUpRow}>
                    Below you can find your 4-digit PIN Code to which you can enter at the machine terminals to
                    start your laundry.
                    <br/>
                    <br/>
                    <p>PIN Code: {props.pinCode}</p>
                    <br/>
                    <br/>
                    <p>Thank you for using LaundryWise!</p>
                </div>

                <div className={classes.signUpRow + " " + classes.signUpButtons}>
                    <Button
                        className={classes.signUpButton}
                        onClick={props.onHomePageClicked}>
                        Homepage
                    </Button>
                </div>
            </Paper>
        </div>
    );
}

export default SuccessComponent;
