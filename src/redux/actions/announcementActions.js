import AnnouncementService from "../../services/AnnouncementService";

export function getAnnouncements(data) {
    function onSuccess(announcements) {
        return { type: "GET_ANNOUNCEMENTS", announcements: announcements };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log("failed to get the announcements", error);
    }

    return async (dispatch) => {
        try {
            // ask for the movies in the backend
            console.log("IT COMES IN HERE");
            let announcements = await AnnouncementService.getAnnouncementsInRoom(data);
            // call onSuccess in context of redux
            dispatch(onSuccess(announcements));
        } catch (e) {
            onFailure(e);
        }
    };
}

export function getAnnouncement(laundryRoomId) {
    function onSuccess(announcement) {
        return { type: "GET_ANNOUNCEMENT", announcement: announcement };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log("failed to get the announcement", error);
    }

    return async (dispatch) => {
        try {
            // ask for the movies in the backend
            console.log("IT COMES IN TO THE ANNOUNCEMENT ACTION");
            let announcement = await AnnouncementService.getAnnouncement(laundryRoomId);
            // call onSuccess in context of redux
            dispatch(onSuccess(announcement));
        } catch (e) {
            onFailure(e);
        }
    };
}



