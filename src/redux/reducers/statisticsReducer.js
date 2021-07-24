export function statistics(state = {}, action) {
    switch (action.type) {
        case "GET_STATISTICS":
            console.log("INSIDE THE STATISTICS REDUCER:");
            console.log("Given value is:");
            console.log(action.payload);
            return {
                value: action.payload
            };
        default:
            return state;
    }
}


