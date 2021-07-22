import {combineReducers} from "redux";
import user from "./userReducer";
import entities from "./entitiesReducer";
import selectedMovie from "./selectedMovieReducer";
import {selectedLaundryRoom, allLaundryRooms, updatedRoom} from "./laundryRoomReducer";
import {selectRoom} from "./roomReducer";

//import {useSelector} from "react-redux";
import {allAnnouncements} from "./announcementReducer";
import {selectMachine, selectMachines,selectMachinesInRoom} from "./machineReducer";

export default combineReducers({
    user,
    entities,
    selectedMovie,
    selectedLaundryRoom,
    allLaundryRooms,
    selectRoom,
    updatedRoom,
    allAnnouncements,
    selectMachine,
    selectMachines,
    selectMachinesInRoom,
});
