/**
 * @author canberk.anar
 */

import LaundryRoomService from "../../services/LaundryRoomService";

export const getLaundryRoom = (id, machineType, date) => {
    function onSuccess(laundryroom) {
        return { type: "GETLAUNDRYROOM_SUCCESS", laundryroom: laundryroom };
    }
    function onFailure(error) {
        console.log("failed to load a laundryroom", error);
    }

    return async (dispatch, getState) => {
        try {
            let laundryroom = await LaundryRoomService.getLaundryRoom(id, machineType, date);
            dispatch(onSuccess(laundryroom));
        } catch (e) {
            onFailure(e);
        }
    };
};

export function getLaundryRooms() {
    // when the backend call was successfull and the movies are retrieved
    // in the dispatcher the movies will be added to the global state
    function onSuccess(laundryRooms) {
        return { type: "GETLAUNDRYROOMS_SUCCESS", laundryRooms: laundryRooms };
    }
    // when the backend call was failed
    function onFailure(error) {
        // error handling
        console.log("failed to get the laundryRooms", error);
    }

    return async (dispatch) => {
        try {
            // ask for the movies in the backend
            let laundryRooms = await LaundryRoomService.getLaundryRooms();
            // call onSuccess in context of redux
            dispatch(onSuccess(laundryRooms));
        } catch (e) {
            onFailure(e);
        }
    };
}


