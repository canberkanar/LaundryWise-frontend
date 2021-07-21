// export function getRoom(theRoom) {
//     function onSuccess(room) {
//         return { type: "GET_ROOM_SUCCESS", room: room };
//     }
//     console.log("INSIDE THE GET ROOM ACTION:")
//     console.log(theRoom)
//     return { type: "ROOM", room: theRoom };
// }


export function getRoom(room)  {
    function onSuccess(room) {
        return { type: "ROOM", room: room };
    }
    function onFailure(error) {
        console.log("failed to load a room", error);
    }

    return async (dispatch) => {
        try {
            dispatch(onSuccess(room));
        } catch (e) {
            onFailure(e);
        }
    };
};



