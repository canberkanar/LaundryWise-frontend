/**
 * @author canberk.anar
 */

export default function reserveReducer(state = {}, action) {
    switch (action.type) {
        case "ADDRESERVATIONS_SUCCESS":
            return { ...state };
        default:
            return state;
    }
}
