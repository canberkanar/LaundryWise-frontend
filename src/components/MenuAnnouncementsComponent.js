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


function MenuAnnouncementsComponent(props) {

    let room = props.room;
    let anc_id = room.announcements;
    // Talha yaptiktan sonra bu announcement Service ile cekilecek:
    let announcement = {"title": "title", "body": "body"};
    const classes = useStyles();
    const user = useSelector((state) => state.user);


    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="MenuAnnouncementsGrid" container>

                        <Grid>
                            <Typography align="left">
                                {announcement.title}
                            </Typography>
                            <br/>
                            <Typography>
                                {announcement.body}
                            </Typography>

                        </Grid>

                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default MenuAnnouncementsComponent;