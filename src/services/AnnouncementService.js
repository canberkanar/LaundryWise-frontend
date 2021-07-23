import HttpService from "./HttpService";
export default class AnnouncementService {

    static baseURL() {return "http://localhost:4000/announcement";}

    static getAnnouncementsInRoom(data) {
        return new Promise(async (resolve, reject) => {
            let url = `${AnnouncementService.baseURL()}/list`

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

    static getAnnouncement(id) {
        return new Promise(async (resolve, reject) => {
            console.log("COME IN TO ANNOUNCEMENT SERVICE")
            let url = `${AnnouncementService.baseURL()}/`
            let data = {
                laundryRoomId: id
            }

            await HttpService.post(
                url,
                data,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving Announcement!");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
