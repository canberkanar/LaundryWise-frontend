export function statistics(state = {}, action) {
    switch (action.type) {
        case "GET_STATISTICS":
            console.log("INSIDE THE STATISTICS REDUCER:");
            return {
                value: action.payload
            };
        default:
            return state;
    }
}


