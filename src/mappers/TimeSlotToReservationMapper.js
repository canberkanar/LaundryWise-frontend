/**
 * @author canberk.anar
 */

function TimeSlotToReservationMapper(reservation, user) {

    let mappedReservation = new Object();
    mappedReservation.machineId = reservation.machineId;
    mappedReservation.allocatedTimeId = reservation.id;
    mappedReservation.customerId = user._id;
    mappedReservation.serviceProviderId = "60f47d66c022a64fee0ca897"; //TODO

    return mappedReservation;
}


export default TimeSlotToReservationMapper;
//     serviceProvider: req.body.service_provider_id