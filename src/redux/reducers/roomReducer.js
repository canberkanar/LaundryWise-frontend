export function selectRoom(state = {}, action) {
    switch (action.type) {
        case "ROOM":
            console.log("INSIDE THE SELECT ROOM REDUCER:");
            console.log(action.room);
            return { room: action.room };
        case "GET_ROOM_FAILURE":
            return { room: "Sorry for your loss." };
        default:
            return { room: null };
    }
}


