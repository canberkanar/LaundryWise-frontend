
export function allAnnouncements(state = {}, action) {
    switch (action.type) {
        case "GET_ANNOUNCEMENTS":
            return { announcements: action.announcements };
        default:
            return state;
    }
}



