import { combineReducers } from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import selectedLaundryRoom from "./laundryRoomReducer";

export default combineReducers({
    user,
    entities,
    selectedMovie,
    selectedLaundryRoom
});
