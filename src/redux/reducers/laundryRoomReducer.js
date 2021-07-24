
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

const getLaundryRooms = () => {
    if (window.localStorage["laundryRooms"]) {
        return window.localStorage["laundryRooms"];
    }
    return {};
};
export function allLaundryRooms(state = getLaundryRooms(), action) {
    switch (action.type) {
        case "GETLAUNDRYROOMS_SUCCESS":
            return { laundryRooms: action.laundryRooms };
        default:
            return { laundryRooms: action.laundryRooms };
    }
}

const getLaundryRoom = () => {
    if (window.localStorage["room"]) {
        return window.localStorage["room"];
    }
    return {};
};
export function updatedRoom(state = getLaundryRoom(), action) {
    switch (action.type) {
        case "UPDATED_ROOM":
            return { updated_room: action.laundryroom };
        default:
            return { updated_room: action.laundryroom };
    }
}

export function setRoom(state = getLaundryRoom(), action) {
    switch (action.type) {
        case "UPDATED_ROOM":
            return { updated_room: action.laundryroom };
        default:
            return { updated_room: action.laundryroom };
    }
}

export function myLaundryRooms(state = {}, action) {
    console.log("I have come into myRooms reducer");
    switch (action.type) {
        case "GET_MY_LAUNDRYROOMS":
            console.log("Writing in to reducer");
            console.log(action.rooms);
            return {rooms: action.rooms};
        default:
            console.log("Reading initial state:");
            return state;
    }
}

