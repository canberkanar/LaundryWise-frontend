import React, {useEffect, useState} from "react";
import {
    Paper,
    Grid,
    Typography,
    FormControlLabel,
    Switch,

} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {useSelector} from "react-redux";
import AnnouncementService from "../services/AnnouncementService";
import LaundryRoomService from "../services/LaundryRoomService";
import Loading from "./Loading";

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

    const classes = useStyles();
    let room = props.room;
    let announcement = room.theAnnouncement;
    //let announcement = {"title": "title", "body": "body"};

    return (!announcement.body ? <Loading/> :

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Typography align="right" variant="h6">
                        {announcement.title}
                    </Typography>
                    <br/>
                    <Typography align="right">
                        {announcement.body}
                    </Typography>

                </div>
            </Paper>
        </div>
    );
}

export default MenuAnnouncementsComponent;