import {combineReducers} from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import {selectedLaundryRoom, allLaundryRooms, updatedRoom} from "./laundryRoomReducer";
import {selectRoom} from "./roomReducer";

export default combineReducers({
    user,
    entities,
    selectedMovie,
    selectedLaundryRoom,
    allLaundryRooms,
    selectRoom,
    updatedRoom
});
