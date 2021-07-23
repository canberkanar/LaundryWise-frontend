/**
 * @author canberk.anar
 */

import HttpService from "./HttpService";

export default class ReserveService {
    static baseURL() {
        return "http://localhost:4000/rental";
    }

    static createReservations(reservations) {
        return new Promise((resolve, reject) => {
            HttpService.post(
                ReserveService.baseURL(),
                reservations,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
