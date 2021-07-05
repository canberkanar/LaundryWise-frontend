/**
 * @author canberk.anar
 */

export default function selectedLaundryRoom(state = {}, action) {
    switch (action.type) {
        case "GETLAUNDRYROOM_SUCCESS":
            return { laundryroom: action.laundryroom };
        case "GETLAUNDRYROOM_ERROR":
            return { error: action.error };
        default:
            return { laundryroom: action.laundryroom };
    }
}
