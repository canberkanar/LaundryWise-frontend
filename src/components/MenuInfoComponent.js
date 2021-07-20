import React, {useEffect} from "react";
import {getLaundryRooms} from "../redux/actions";
import Loading from "../components/Loading";
import {
    Paper,
    Grid,
    Typography, TableContainer, TableHead, Table, TableBody, TextField, TableRow, TableCell,
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
    console.log(LR);
    const item = LR.map((name,address) => {
        return <div>
            <h2>{name}</h2>
            <p>{address}</p>
            </div>
    })

    useEffect(() => {
        // trigger room load from backend
        getLaundryRooms();
    }, []);

    return (!allLaundryRooms.laundryRooms && !allLaundryRooms.error ? <Loading/> :

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
                                                <MenuRoomInfoComponent
                                                    isLoggedIn={!!user.user}
                                                    isAdmin={!!user.user ? user.user.role === "admin" : false}
                                                    onMachineManagementClick={props.onMachineManagementClick}
                                                    onRoomManagementClick={props.onRoomManagementClick}
                                                    room={item}
                                                />
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