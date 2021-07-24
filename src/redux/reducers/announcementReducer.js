
export function allAnnouncements(state = {}, action) {
    switch (action.type) {
        case "GET_ANNOUNCEMENTS":
            return { announcements: action.announcements };
        default:
            return state;
    }
}

export function announcement(state = {}, action) {
    switch (action.type) {
        case "GET_ANNOUNCEMENT":
            console.log("IN THE ANNOUNCEMENT REDUCER");
            console.log(action.announcement);
            return { announcement: action.announcement };
        default:
            return state;
    }
}



