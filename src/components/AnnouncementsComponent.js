import {makeStyles} from "@material-ui/core/styles";
import {
    FormLabel,
    Grid,
    IconButton, Input,
    InputLabel,
    MenuItem,
    Paper,
    Select, TextareaAutosize,
    TextField,
    Typography
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import {getAnnouncements} from "../redux/actions/announcementActions";
import {connect, useSelector} from "react-redux";
import {getLaundryRooms} from "../redux/actions";
import {allAnnouncements} from "../redux/reducers/announcementReducer";
import Loading from "./Loading";
import AnnouncementService from "../services/AnnouncementService";

const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        // width: "500px",
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
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

function AnnouncementsComponent(props) {
    const classes = useStyles();


    let announcement = props.announcement;
    const [title, setTitle] = useState(announcement.title);
    const [body, setBody] = useState(announcement.body);

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onBodyChange = (e) => {
        setBody(e.target.value)
    }
    const onSave = () => {
        console.log(title, body);
    };

    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <Grid container id="AnnouncementsGridContainer">
                        <IconButton
                            aria-label="save"
                            className={classes.margin}
                            onClick={() => props.onClick(title,body)}
                        >
                            <SaveIcon fontSize="large"/>
                        </IconButton>

                        <TextField
                            id="outlined-multiline-static"
                            label="Title"
                            multiline
                            rows={4}
                            onChange={onTitleChange}
                            defaultValue={title}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Body"
                            multiline
                            rows={4}
                            onChange={onBodyChange}
                            defaultValue={body}
                            variant="outlined"
                        />
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}



export default connect()(AnnouncementsComponent);