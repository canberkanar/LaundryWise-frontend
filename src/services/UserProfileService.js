import HttpService from "./HttpService";
export default class UserRentalService {

    static rentalURL() {return "http://localhost:4000/rental";}

    static getUserRentals(data) {
        return new Promise(async (resolve, reject) => {
            let url = `${UserRentalService.rentalURL()}/myRentals`

            await HttpService.post(
                url,
                data,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving User Rentals!");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
