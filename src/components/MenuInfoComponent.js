import React, {useEffect} from "react";
import {getLaundryRooms} from "../redux/actions";
import Loading from "../components/Loading";
import {
    Paper,
    Grid,
    Typography, TableContainer, TableHead, Table, TableBody, TextField, TableRow, TableCell, Button,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {connect, useSelector} from "react-redux";
import MenuRoomInfoComponent from "./MenuRoomInfoComponent";
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

function MenuInfoComponent(props) {

    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const allLaundryRooms = useSelector((state) => state.allLaundryRooms);
    const LR = useSelector((state) => state.allLaundryRooms.laundryRooms);
    let {match, getLaundryRooms} = props;
    let passedRoom = "";
    console.log(LR);

    useEffect(() => {
        // trigger room load from backend
        getLaundryRooms();
    }, []);

    function handleClick(xyz) {
        console.log("handleClickButton");
        props.onRoomManagementClick(xyz); // pass any argument to the callback
    }

    return (!allLaundryRooms.laundryRooms && !allLaundryRooms.error && !LR ? <Loading/> :

        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>

                    <Grid id="LaundryRoomInfoGrid" container>

                        <Grid>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {LR.map((item, index) => {
                                            return (
                                                <>
                                                <MenuRoomInfoComponent
                                                    isLoggedIn={!!user.user}
                                                    isAdmin={!!user.user ? user.user.role === "admin" : false}
                                                    onMachineManagementClick={props.onMachineManagementClick}
                                                    onRoomManagementClick={props.onRoomManagementClick}
                                                    room={item}
                                                />
                                                <Button
                                                    name="MyButton"
                                                    room={item.name}
                                                    color="red"
                                                    onClick = {() => handleClick(item)}
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.roomSettingsButton}
                                                >
                                                    Send Room To Parent
                                                </Button>
                                                </>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            {/*<br/>*/}
                            {/*<MenuRoomInfoComponent*/}
                            {/*    isLoggedIn={!!user.user}*/}
                            {/*    isAdmin={!!user.user ? user.user.role === "admin" : false}*/}
                            {/*    onMachineManagementClick={props.onMachineManagementClick}*/}
                            {/*    onRoomManagementClick={props.onRoomManagementClick}*/}
                            {/*/>*/}

                            {/*<br/>*/}
                            {/*<MenuRoomInfoComponent*/}
                            {/*    isLoggedIn={!!user.user}*/}
                            {/*    isAdmin={!!user.user ? user.user.role === "admin" : false}*/}
                            {/*    onMachineManagementClick={props.onMachineManagementClick}*/}
                            {/*    onRoomManagementClick={props.onRoomManagementClick}*/}
                            {/*/>*/}

                        </Grid>

                    </Grid>

                </div>
            </Paper>
        </div>
    );
}

export default connect(null, {getLaundryRooms})(
    MenuInfoComponent
);