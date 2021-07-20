
import LaundryRoomService from "../../services/LaundryRoomService";
import MovieService from "../../services/MovieService";

export const getRoom = (theRoom) => {
    // function onSuccess(laundryroom) {
    //     return { type: "ROOM", room: theRoom };
    // }
    // function onFailure(error) {
    //     console.log("failed to load a laundryroom", error);
    // }
    //
    // return async (dispatch, getState) => {
    //     try {
    //         let laundryroom = await LaundryRoomService.getLaundryRoom(id, machineType, date);
    //         dispatch(onSuccess(laundryroom));
    //     } catch (e) {
    //         onFailure(e);
    //     }
    // };

    return {
        type: 'ROOM',
        data: theRoom
    }
};



