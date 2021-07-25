const getUser = () => {
    if (window.localStorage["jwtToken"]) {
        let token = window.localStorage["jwtToken"];
        let base64Url = token.split(".")[1];
        let base64 = base64Url.replace("-", "+").replace("_", "/");
        let userJson = JSON.parse(window.atob(base64));
        // if token is expired delete it and return {}
        // --> User is not logged in anymore.
        if (userJson.exp > Date.now()) {
            window.localStorage.removeItem("jwtToken");
            return {};
        }
        return {
            user: {
                _id: userJson._id,
                username: userJson.username,
                email: userJson.email,
                address: userJson.address,
                mobileNumber: userJson.mobileNumber,
                laundrywiseCode: userJson.laundrywiseCode,
                role: userJson.role,
                laundryRooms: userJson.laundryRooms,
            },
        };
    }
    return {};
};

export default function user(state = getUser(), action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { user: action.user };
        case "LOGIN_FAILURE":
            return { error: "Password or username incorrect." };
        case "WRONG_LAUNDRYWISE_CODE":
            return { error: "The laundrywise code is not valid." };
        case "LOGIN_RESET":
            return {};
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}
