/**
 * @author canberk.anar
 */

// ping http://localhost:3000/admin/laundryroom/:roomId to access the page

import {Grid} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {addReservations, getLaundryRoom} from "../redux/actions";
import RoomInfoComponentAdminReservations from "../components/RoomInfoComponentAdminReservations";
import Loading from "../components/Loading";
import ReserveSchedulerComponent from "../components/ReserveSchedulerComponent";
import ReservationFilterComponent from "../components/ReservationFilterComponent";
import BasketComponent from "../components/BasketComponent";
import TimeSlotToReservationMapper from "../mappers/TimeSlotToReservationMapper";

function ReserveView(props) {

    const user = useSelector((state) => state.user);

    const selectedLaundryRoom = useSelector((state) => state.selectedLaundryRoom);
    const [selectedMachineType, setSelectedMachineType] = useState("washer");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reservations, setReservations] = useState([]);
    const [totalFee, setTotalFee] = useState(0);

    let {match, getLaundryRoom, addReservations} = props;

    const addReservation = (reservation) => {

        if (!user.user) { // check if user logged in
            alert("Login First!");
            return;
        }

        if(reservation.title == "Past Timeslot"){
            alert("This timeslot has passed! Please choose one of the future timeslots which are displayed as \"Available\".");
        }
        else if (reservation.title != "Available") {
            alert("Please choose an Available timeslot!");
            return;
        }

        let newReservationList = reservations.slice(0); // creates a shallow copy of the array instead of referencing it
        // we need this approach to notify REDUX that the state has been updated and so useEffect is triggered to
        // update the state of the basket component
        // https://stackoverflow.com/questions/14491405/javascript-passing-arrays-to-functions-by-value-leaving-original-array-unaltere


        // https://stackoverflow.com/questions/8217419/how-to-determine-if-javascript-array-contains-an-object-with-an-attribute-that-e
        if (!reservations.some(e => e.id === reservation.id)) {
            newReservationList.push(reservation);
            setTotalFee(newReservationList.map(item => item.price).reduce((totalPrice, price) => totalPrice + price));
            setReservations(newReservationList);
        } else {
            alert("Warning: You have already added a reservation at this timeslot! Please choose another one.");
        }
    };

    const onClickDeleteReservation = (reservation) => {
        const arrayWithRemovedReservation = reservations.slice(0).filter(function (e) { // removes selected reservation from the list
            return e !== reservation
        });

        if (arrayWithRemovedReservation.length > 0) {
            setTotalFee(arrayWithRemovedReservation.map(item => item.price).reduce((totalPrice, price) => totalPrice + price));
        } else {
            setTotalFee(0)
        }
        setReservations(arrayWithRemovedReservation);
    };


    const reserve = () => {
        if (reservations.length == 0) {
            alert("Select a timeslot first!");
            return;
        }

        if (user.user) { // check if user logged in
            for (var i = 0; i < reservations.length; i++) {
                addReservations(TimeSlotToReservationMapper(reservations[i], user.user));
            }

           props.history.push("/paymentSuccess", Math.floor(1000 + Math.random() * 9000));
        } else {
            alert("Login First!");
        }
    };

    useEffect(() => {
        // get id of laundry room from URL
        let roomId = match.params.id;

        // trigger room load from backend
        getLaundryRoom(roomId, selectedMachineType, selectedDate);
    }, [selectedMachineType, selectedDate, reservations, totalFee]);


    return (
        !selectedLaundryRoom.laundryroom && !selectedLaundryRoom.error ? <Loading/> :
            <div>
                <Helmet>
                    <title>Room Reservations (Admin)</title>
                </Helmet>

                <br/>

                <Grid container id="MachineManagementGrid">
                    <Grid item xs={5} id="RoomInfoGrid">
                        <RoomInfoComponentAdminReservations
                            laundryroom={selectedLaundryRoom.laundryroom}/>
                    </Grid>
                    <br/>
                    <Grid item xs={5} id="ReservationFilterGrid">
                        <ReservationFilterComponent selectedMachineType={selectedMachineType}
                                                    selectedDate={selectedDate}
                                                    passSelectedMachineTypeToParent={setSelectedMachineType}
                                                    passSelectedDateToParent={setSelectedDate}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container id="AdminReservationSchedulingGrid">
                    <Grid item xs={9} id="AdminSchedulerField" style={{padding: 20}}>
                        <ReserveSchedulerComponent laundryroom={selectedLaundryRoom.laundryroom}
                                                   addReservation={addReservation} selectedDate={selectedDate}/>
                    </Grid>
                    <Grid item xs={3} id="ReservationBasketGrid" style={{paddingRight: 20, paddingTop: 20}}>
                        <BasketComponent reservations={reservations} onClickDeleteReservation={onClickDeleteReservation}
                                         reserve={reserve} laundryroom={selectedLaundryRoom.laundryroom}
                                         totalFee={totalFee}
                        />
                    </Grid>
                </Grid>
            </div>
    );
}

// export default AdminRoomReservationsView;
// connect() establishes allows the usage of redux functionality
export default connect(null, {getLaundryRoom, addReservations})(
    ReserveView
);

