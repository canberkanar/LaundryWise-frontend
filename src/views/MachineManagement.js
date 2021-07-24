import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import Loading from "../components/Loading";
import React, {useEffect, useState} from "react";
import {getAnnouncement, getAnnouncements} from "../redux/actions/announcementActions";
import LaundryRoomService from "../services/LaundryRoomService";
import {login} from "../redux/actions";
import AnnouncementService from "../services/AnnouncementService";

function MachineManagement(props) {

    console.log("COME INSIDE TO MACHINE MANAGEMENT");

    const theRoom = props.location.state;
    console.log("The RRoom: ", theRoom);
    const announcement = useSelector((state) => state.announcement);
    let {match, getAnnouncement} = props;
    //let announcement = {"title": "title", "body": "body"};

    useEffect(() => {
        // trigger room load from backend
        getAnnouncement(theRoom._id);
    }, []);


    const handleSave = async (start, end) => {
        console.log("BUTTON WORKED!");
        console.log(start, end);
        let data={
            "operationStartHour": start,
            "operationEndHour": end
        }
        try {
            let updatedRoom = await LaundryRoomService.updateLaundryRoom(theRoom._id, data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleAnncUpdate = async (title, body) => {
        console.log("ANC UPDATE BUTTON WORKED!");
        console.log(title, body);

        try {
            let updatedAnc = await AnnouncementService.updateAnnouncement(theRoom.announcements, title, body);
        } catch (e) {
            console.log(e);
        }
    };

    return (!announcement.announcement ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Machine Management</title>
            </Helmet>
            <br/>
            <Grid container id="MachineManagementGrid">
                <Grid item xs={7} id="RoomInfoGrid">
                    <RoomInfoComponent
                        room={theRoom}
                    />
                    <br/>
                    <WorkingHoursComponent
                        onClick={(start, end) => handleSave(start, end)}
                        room={theRoom}
                    />
                </Grid>
                <Grid item xs={5} id="RoomAnnouncementsGrid">
                    <AnnouncementsComponent
                        announcement={announcement.announcement}
                        room={theRoom}
                        onClick={(title, body) => handleAnncUpdate(title, body)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

// export default MachineManagement;
export default connect(null, {getAnnouncement})(
    MachineManagement
);


