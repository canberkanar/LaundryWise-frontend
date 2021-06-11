import {makeStyles} from "@material-ui/core/styles";
import {
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select, TextareaAutosize,
    TextField,
    Typography
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

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

    return (

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <Grid container id="AnnouncementsGridContainer">
                        <Grid item xs={6}>
                            <FormLabel component="legend">Room Announcements</FormLabel>

                            <IconButton aria-label="delete" className={classes.margin}>
                                <AddIcon fontSize="large"/>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <EditIcon fontSize="large"/>
                            </IconButton>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <DeleteIcon fontSize="large"/>
                            </IconButton>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>Announcement ID</Typography>
                            <Select id="select" value="1" select>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                            </Select>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <SaveIcon fontSize="large"/>
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} >
                            <InputLabel id="titleLabel">Title</InputLabel>
                            <TextField id="titleField"/>
                        </Grid>

                        <br/>

                        <Grid item xs={12}>
                            <InputLabel id="bodyLabel">Body</InputLabel>
                            <TextField id="titleField"/>
                        </Grid>
                    </Grid>
                </div>
            </Paper></div>
    );
}


export default AnnouncementsComponent;