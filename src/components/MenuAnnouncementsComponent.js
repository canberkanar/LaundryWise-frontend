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

    let room = props.room;
    let announcement = {"title": "title", "body": "body"};
    // const announcement = useSelector((state) => state.announcement);

    const classes = useStyles();

    // const getAnnc = async (id) => {
    //     try {
    //         let announcement = await AnnouncementService.getAnnouncement(id);
    //         console.log("The Returned Announcement is:")
    //         console.log(announcement);
    //         return announcement;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
    // let announcement = getAnnc(room._id);
    // console.log("The Read Announcement is:")
    // console.log(announcement);



    return (!announcement.body ? <Loading/> :

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