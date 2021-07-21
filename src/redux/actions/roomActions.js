export function getRoom(theRoom) {
    console.log("INSIDE THE GET ROOM ACTION:")
    console.log(theRoom)
    return { type: "ROOM", room: theRoom };
}


// export const getRoom = (id) => {
//     function onSuccess(room) {
//         return { type: "GET_ROOM_SUCCESS", room: room };
//     }
//     function onFailure(error) {
//         console.log("failed to load a room", error);
//     }
//
//     return async (dispatch, getState) => {
//         try {
//             let room = await LaundryRoomService.getLaundryRoom(id, null, null);
//             console.log("INSIDE THE ACTON THE SERVICE IS CALLED")
//             console.log(room);
//             dispatch(onSuccess(room));
//         } catch (e) {
//             onFailure(e);
//         }
//     };
// };



