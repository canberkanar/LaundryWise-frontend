import HttpService from "./HttpService";
export default class StatisticsService {

    static baseURL() {return "http://localhost:4000/statistics";}

    static getStatistics(data) {
        return new Promise(async (resolve, reject) => {
            let url = `${StatisticsService.baseURL()}`

            await HttpService.post(
                url,
                data,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving Statistics!");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }
}
