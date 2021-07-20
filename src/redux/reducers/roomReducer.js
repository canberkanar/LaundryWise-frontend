/**
 * @author canberk.anar
 */

export default function selectedRoom(state = {}, action) {
    switch (action.type) {
        case "ROOM":
            return { room: action.data };
        default:
            return { room: action.data };
    }

}

