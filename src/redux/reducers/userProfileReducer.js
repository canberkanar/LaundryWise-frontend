export function userRentals(state = {}, action) {
    switch (action.type) {
        case "GET_USER_RENTALS":
            console.log("INSIDE THE USER RENTALS REDUCER:");
            console.log(action.payload)
            return {
                value: action.payload
            };
        default:
            return state;
    }
}


