export function selectRoom(state = {}, action) {
    switch (action.type) {
        case "ROOM":
            console.log("INSIDE THE SELECT ROOM REDUCER:");
            console.log(action.room);
            return { room: action.room };
        default:
            return state;
    }
}


