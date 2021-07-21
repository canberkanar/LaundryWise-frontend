import MachineService from "../../services/MachineService";

export const getMachine = (id) => {
    function onSuccess(machine) {
        return { type: "GETMACHINE_SUCCESS", machine: machine };
    }
    function onFailure(error) {
        console.log("failed to load a machine", error);
    }

    return async (dispatch, getState) => {
        try {
            let machine = await MachineService.getMachine(id);
            dispatch(onSuccess(machine));
        } catch (e) {
            onFailure(e);
        }
    };
};

export const getAllMachines = () => {
    function onSuccess(machines) {
        return { type: "GETALLMACHINES_SUCCESS", machines: machines };
    }
    function onFailure(error) {
        console.log("failed to load a machine", error);
    }

    return async (dispatch, getState) => {
        try {
            let machines = await MachineService.getAllMachines();
            dispatch(onSuccess(machines));
        } catch (e) {
            onFailure(e);
        }
    };
};

export const getAllMachinesInRoom = (id) => {
    function onSuccess(machines) {
        return { type: "GETALLMACHINESINROOM_SUCCESS", machines: machines };
    }
    function onFailure(error) {
        console.log("failed to load a machine", error);
    }

    return async (dispatch, getState) => {
        try {
            let machines = await MachineService.getAllMachinesInRoom(id);
            dispatch(onSuccess(machines));
        } catch (e) {
            onFailure(e);
        }
    };
};