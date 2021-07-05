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


