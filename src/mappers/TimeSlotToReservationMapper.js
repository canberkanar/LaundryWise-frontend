/**
 * @author canberk.anar
 */

function TimeSlotToReservationMapper(reservation, user) {

    let mappedReservation = new Object();
    mappedReservation.machineId = reservation.machineId;
    mappedReservation.allocatedTimeId = reservation.id;
    mappedReservation.customerId = user._id;

    return mappedReservation;
}


export default TimeSlotToReservationMapper;
//     serviceProvider: req.body.service_provider_id