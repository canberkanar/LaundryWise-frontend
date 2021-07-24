/**
 * @author canberk.anar
 */


function reserveSchedulerMapper(laundryRoom) {

    let timeSlots = [];

    if (laundryRoom.machines && laundryRoom.machines.length > 0) {

        for (let i = 0; i < laundryRoom.machines[0].timeslots.length; i++) {
            let timeSlot = new Object();

            timeSlot.startDate = new Date(laundryRoom.machines[0].timeslots[i].startTime);
            timeSlot.endDate = new Date(laundryRoom.machines[0].timeslots[i].endTime);
            timeSlot.machineType = laundryRoom.machines[0].machineType.charAt(0).toUpperCase() + laundryRoom.machines[0].machineType.slice(1);;
            timeSlot.title = "Out of Service";

            for (let j = 0; j < laundryRoom.machines.length; j++) {
                timeSlot.id = laundryRoom.machines[j].timeslots[i]._id;
                timeSlot.deviceNumberInRoom = laundryRoom.machines[j].deviceNumberInRoom;
                timeSlot.machineId = laundryRoom.machines[j]._id;
                timeSlot.price = laundryRoom.machines[j].price;

                if (laundryRoom.machines[j].timeslots[i].status === "occupied") {
                    timeSlot.title = "Occupied";
                } else if (laundryRoom.machines[j].timeslots[i].status === "available") {
                    timeSlot.title = "Available";
                    break; //1 available slot found, no need to iterate further
                }
            }

            timeSlots.push(timeSlot);
        }
    }

    return timeSlots;
}


export default reserveSchedulerMapper;