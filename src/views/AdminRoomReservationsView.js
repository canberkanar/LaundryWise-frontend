/**
 * @author canberk.anar
 */

// ping http://localhost:3000/admin/laundryroom/:roomId to access the page

import {Grid} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

import {getLaundryRoom} from "../redux/actions";
import RoomInfoComponentAdminReservations from "../components/RoomInfoComponentAdminReservations";
import Loading from "../components/Loading";
import AdminReservationFilterComponent from "../components/AdminReservationFilterComponent";
import AdminSchedulerComponent from "../components/AdminSchedulerComponent";

function AdminRoomReservationsView(props) {

    const selectedLaundryRoom = useSelector((state) => state.selectedLaundryRoom);
    const [selectedMachineType, setSelectedMachineType] = useState("washer");
    const [selectedDate, setSelectedDate] = useState(new Date());

    let {match, getLaundryRoom} = props;


    useEffect(() => {
        // get id of laundry room from URL
        let roomId = match.params.id;
        console.log(roomId);
        // trigger room load from backend
        getLaundryRoom(roomId, selectedMachineType, selectedDate);
    }, [match.params, selectedMachineType, selectedDate]);


    return (!selectedLaundryRoom.laundryroom && !selectedLaundryRoom.error ? <Loading/> :
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
                        <AdminReservationFilterComponent selectedMachineType={selectedMachineType} selectedDate={selectedDate}
                                                    passSelectedMachineTypeToParent={setSelectedMachineType} passSelectedDateToParent={setSelectedDate}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container id="AdminReservationSchedulingGrid">
                    <Grid item id="AdminSchedulerField" >
                        <AdminSchedulerComponent laundryroom={selectedLaundryRoom.laundryroom} selectedDate={selectedDate}/>
                    </Grid>
                </Grid>
            </div>
    );
}

// export default AdminRoomReservationsView;
// connect() establishes allows the usage of redux functionality
export default connect(null, {getLaundryRoom})(
    AdminRoomReservationsView
);

