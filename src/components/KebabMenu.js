import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { logout } from "../redux/actions";
import { Menu, MenuItem, Avatar, Divider } from "@material-ui/core";
import { connect, useSelector } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
    menuitem: {
        display: "flex",
        minWidth: "200px",
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
}));
/**
 * Menu for user managment
 * @param {props} props
 */
function KebabMenu(props) {
    const classes = useStyles();

    const user = useSelector((state) => {
        // return the currently logged in user from redux store
        return state.user;
    });

    const onClickLogin = () => {
        // close this menu
        props.onClose();
        // navigate to the login page
        props.history.push("/login");
    };

    const onClickLogout = () => {
        // trigger redux logout action
        props.dispatch(logout());
        // close this menu
        props.onClose();
        // navigate to the home page
        props.history.push("/");
    };

    const onClickMachineManagement = () => {
        props.history.push("/machineManagement");
    }

    const onClickMainMenu = () => {
        props.history.push("/mainMenu");
    }

    function onClickUsageStatistics() {
        props.history.push("/usageStatistics");
    }

    function onClickRevenueStatistics() {
        props.history.push("/revenueStatistics");
    }

    const onClickAdminRoomReservations = () => {
        props.history.push("/admin/laundryroom/60e04e770625c02fc850bf1a");
    }

    const onClickReserve = () => {
        props.history.push("/reserve/60f48d5f240f7f049053b676");
    }

    return (
        <Menu
            open={props.open}
            anchorEl={props.anchor}
            onClose={props.onClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
        >
            {user.user
                ? [
                      <MenuItem key="user" className={classes.menuitem}>
                          <Avatar className={classes.avatar}>
                              {user.user.username ? user.user.username[0] : ""}
                          </Avatar>
                          {user.user.username}
                      </MenuItem>,
                      <Divider key="divider" />,
                      <MenuItem
                          key="logout"
                          onClick={onClickLogout}
                          className={classes.menuitem}
                      >
                          <ExitToAppIcon className={classes.avatar} />
                          Logout
                      </MenuItem>,
                  ]
                : [
                      <MenuItem
                          key="login"
                          onClick={onClickLogin}
                          className={classes.menuitem}
                      >
                          <VerifiedUserIcon className={classes.avatar} />
                          Login
                      </MenuItem>,
                  ]}

            <MenuItem
                key = "test" onClick={onClickMachineManagement}> Machine Management
            </MenuItem>
            <MenuItem
                key = "main-menu" onClick={onClickMainMenu}
                className={classes.menuitem}>

                Main Menu
            </MenuItem>
            <MenuItem
                key = "usage-statistics" onClick={onClickUsageStatistics}
                className={classes.menuitem}>

                Usage Statistics
            </MenuItem>
            <MenuItem
                key = "revenue-statistics" onClick={onClickRevenueStatistics}
                className={classes.menuitem}>
                Revenue Statistics
            </MenuItem>
            <MenuItem
                key = "admin-room-reservations" onClick={onClickAdminRoomReservations}
                className={classes.menuitem}>
                Room Reservations (Admin)
            </MenuItem>
            <MenuItem
                key = "reserve" onClick={onClickReserve}
                className={classes.menuitem}>
                Reserve
            </MenuItem>
        </Menu>
    );
}

// attributes of props and their type
KebabMenu.propTypes = {
    onClose: PropTypes.func.isRequired,
    anchor: PropTypes.element,
    open: PropTypes.bool.isRequired,
};

export default connect()(withRouter(KebabMenu));
