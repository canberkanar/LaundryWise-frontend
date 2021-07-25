import React from "react";
import { Paper, Button,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";


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


function MenuStatsComponent(props) {
    const classes = useStyles();
    const user = useSelector((state) => state.user);

    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    {props.isAdmin ? (
                        <Button
                            onClick={props.onUsageStatsClick}
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.roomSettingsButton}
                        >
                            Usage Statistics
                        </Button>
                    ) : null}
                    <br/>
                    <br/>
                    {props.isAdmin ? (
                        <Button
                            onClick={props.onRevenueStatsClick}
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.roomSettingsButton}
                        >
                            Revenue Statistics
                        </Button>
                    ) : null}
                </div>
            </Paper>
        </div>
    );
}

export default MenuStatsComponent;