import axios from "axios";
import HttpService from "./HttpService";

export default class MachineService {


    static baseURL() {
        return "http://localhost:4000/machine/getmachine/";
    }
    static baseURL2(){
        return "http://localhost:4000/machine/all";
    }
    static baseURL3(){
        return "http://localhost:4000/laundryroom/machinesInRoom";
    }
    static createMachineUrl(){
        return "http://localhost:4000/machine/";
    }
    static updateMachineUrl(){
        return "http://localhost:4000/machine/";
    }
    static removeMachineUrl(){
        return "http://localhost:4000/machine";
    }
    static getAllMachinesInRoom(id,type) {

        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.baseURL3()}/?id=${id}`

            if(type) {
                url = url + "&machineType=" + `${type}`;
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
    static getAllMachines() {
        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.baseURL2()}`;

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
    static getMachine(id) {
        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.baseURL()}/?id=${id}`

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

    static async getMachinesbyId() {
        const response = await axios.get(`http://localhost:4000/machine/getmachine/60f48d84240f7f049053bc1c`);
        console.log(response);
        return response.data;

    }
    static createMachine(data) {
        console.log("Given Data To Me Is:");
        console.log(data);
        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.createMachineUrl()}`;

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

    static updateMachine(data) {
        console.log("Given Data To Me Is:");
        console.log(data);
        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.updateMachineUrl()}`;

            HttpService.put(
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
    static removeMachine(id) {
        console.log("Given ID:");
        console.log(id);
        return new Promise(async (resolve, reject) => {
            let url = `${MachineService.removeMachineUrl()}/?id=${id}`;

            HttpService.remove(
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

