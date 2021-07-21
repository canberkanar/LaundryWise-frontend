
export function selectedLaundryRoom(state = {}, action) {
    switch (action.type) {
        case "GETLAUNDRYROOM_SUCCESS":
            return { laundryroom: action.laundryroom };
        case "GETLAUNDRYROOM_ERROR":
            return { error: action.error };
        default:
            return { laundryroom: action.laundryroom };
    }
}

export function allLaundryRooms(state = {}, action) {
    switch (action.type) {
        case "GETLAUNDRYROOMS_SUCCESS":
            return { laundryRooms: action.laundryRooms };
        default:
            return { laundryRooms: action.laundryRooms };
    }
}

export function updatedRoom(state = {}, action) {
    switch (action.type) {
        case "UPDATED_ROOM":
            return { updated_room: action.laundryroom };
        default:
            return { updated_room: action.laundryroom };
    }
}

