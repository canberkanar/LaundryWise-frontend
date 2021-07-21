export function selectMachine(state = {}, action) {
    switch (action.type) {
        case "GETMACHINE_SUCCESS":
            console.log("INSIDE THE MACHINE  REDUCER:");
            console.log(action.machine);
            return { machine: action.machine };
        default:
            return state;
    }
}
export function selectMachines(state = {}, action) {
    switch (action.type) {
        case "GETALLMACHINES_SUCCESS":
            console.log("INSIDE THE MACHINE  REDUCER:");
            console.log(action.machines);
            return { machines: action.machines };
        default:
            return state;
    }
}


