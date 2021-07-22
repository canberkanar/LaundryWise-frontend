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



