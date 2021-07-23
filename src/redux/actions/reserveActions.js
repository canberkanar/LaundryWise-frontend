import MovieService from "../../services/MovieService";
import ReserveService from "../../services/ReserveService";

/**
 * @author canberk.anar
 */

export function addReservations(reservations) {
    function onSuccess() {
        return { type: "ADDRESERVATIONS_SUCCESS" };
    }
    function onFailure(error) {
        console.log("add reservation failure", error);
    }

    return async (dispatch) => {
        try {
            await ReserveService.createReservations(reservations);
            dispatch(onSuccess());
        } catch (e) {
            onFailure(e);
        }
    };
}