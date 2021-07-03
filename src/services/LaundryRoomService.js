/**
 * @author canberk.anar
 */

import HttpService from "./HttpService";

export default class LaundryRoomService {
    static baseURL() {
        return "http://localhost:4000/laundryroom";
    }

    static getLaundryRoom(id) {
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                `${LaundryRoomService.baseURL()}/${id}`,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving Laundry Room!");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
