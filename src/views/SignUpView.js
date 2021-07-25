import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import SignUpComponent from "../components/SignUpComponent";

import { register } from "../redux/actions";

/**
 * For register new users
 * @param {props} props
 */
function SignUpView(props) {
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.user) {
            props.history.push("/mainMenu");
        }
    }, [user, props.history]);

    const onRegister = (username, password, isAdmin, laundrywiseCode) => {
        props.dispatch(register(username, password, isAdmin, laundrywiseCode));
    };

    const onCancel = () => {
        props.history.push("/");
    };

    return (
        <SignUpComponent
            user={user}
            onRegister={onRegister}
            onCancel={onCancel}
        />
    );
}

export default connect()(withRouter(SignUpView));
