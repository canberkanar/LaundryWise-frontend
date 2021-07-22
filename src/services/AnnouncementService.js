/**
 * @author canberk.anar
 */

import HttpService from "./HttpService";
export default class AnnouncementService {

    static baseURL() {return "http://localhost:4000/announcement/list";}

    static getAnnouncementsInRoom(data) {
        return new Promise(async (resolve, reject) => {
            let url = `${AnnouncementService.baseURL()}`

            HttpService.post(
                url,
                data,
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
