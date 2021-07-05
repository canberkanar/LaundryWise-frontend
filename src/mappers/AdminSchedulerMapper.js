/**
 * @author canberk.anar
 */

function mapToAdminScheduler(laundryRoom) {

    let timeSlots = [];

    if (laundryRoom.machines && laundryRoom.machines.length > 0) {

        for (let i = 0; i < laundryRoom.machines[0].timeslots.length; i++) {
            let timeSlot = new Object();

            timeSlot.startDate = laundryRoom.machines[0].timeslots[i].startTime;
            timeSlot.endDate = laundryRoom.machines[0].timeslots[i].endTime;
            timeSlot.title = "Out of Service";

            for (let j = 0; j < laundryRoom.machines.length; j++) {
                if (laundryRoom.machines[j].timeslots[i].status === "occupied") {
                    timeSlot.title = "Full";
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


export default mapToAdminScheduler;