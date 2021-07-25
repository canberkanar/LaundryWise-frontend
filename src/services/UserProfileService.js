import HttpService from "./HttpService";
export default class UserRentalService {

    static rentalURL() {return "http://localhost:4000/rental";}

    static getUserRentals(data) {
        console.log("In getUserRentals serivce with data:", data);
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

    static removeRental(id) {
        console.log("In remove rental service with rental ID: ", id);
        return new Promise(async (resolve, reject) => {
            let url = `${UserRentalService.rentalURL()}/${id}`

            await HttpService.remove(
                url,
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
