import UserRentalService from "../../services/UserProfileService";

export function getUserRentals(id)  {
    function onSuccess(rentals) {
        console.log("in user rental service")
        console.log(rentals)
        return { type: "GET_USER_RENTALS", payload: rentals};
    }
    function onFailure(error) {
        console.log("failed to user rentals", error);
    }

    return async (dispatch) => {
        try {
            console.log("User Rental action with ID:", id);
            let data = {customerId: id}
        
            let rentals = await UserRentalService.getUserRentals(data);
            dispatch(onSuccess(rentals));
        } catch (e) {
            onFailure(e);
        }
    };
};


