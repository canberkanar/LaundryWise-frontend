/**
 * @author canberk.anar
 */

// ping http://localhost:3000/admin/laundryroom/:id to access the page

import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
import React, {useEffect} from "react";

import {getLaundryRoom} from "../redux/actions";
import RoomInfoComponentAdminReservations from "../components/RoomInfoComponentAdminReservations";

function AdminRoomReservationsView(props) {

    const selectedLaundryRoom = useSelector((state) => state.selectedLaundryRoom);

    let {match, getLaundryRoom} = props;


    useEffect(() => {
        // get id of movie from URL
        let roomId = match.params.id;

        // trigger room load from backend
        getLaundryRoom(roomId);
    }, [match.params]);


    return (
        <div>
            <Helmet>
                <title>Room Reservations (Admin)</title>
            </Helmet>

            <br/>
            <Grid container id="MachineManagementGrid">
                <Grid item xs={5} id="RoomInfoGrid">
                    <RoomInfoComponentAdminReservations
                        laundryroom={selectedLaundryRoom.laundryroom}
                    />
                    <br/>
                    <WorkingHoursComponent/>
                </Grid>
                <br/>
                <Grid item xs={7} id="RoomAnnouncementsGrid">
                    <AnnouncementsComponent/>
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

