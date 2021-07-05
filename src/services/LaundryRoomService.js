/**
 * @author canberk.anar
 */

import HttpService from "./HttpService";

export default class LaundryRoomService {
    static baseURL() {
        return "http://localhost:4000/laundryroom/filter";
    }

    static getLaundryRoom(id, type, date) {
        return new Promise(async (resolve, reject) => {
            let url = `${LaundryRoomService.baseURL()}/?id=${id}`

             if(type) {
                 url = url + "&machineType=" + `${type}`;
             }
             if(date) {
                url = url + "&beginningDateToPullReservations=" + `${date}`;
             }

            HttpService.get(
                url,
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
