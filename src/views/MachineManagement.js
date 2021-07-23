import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import {connect, useSelector} from "react-redux";
import Loading from "../components/Loading";
import React, {useEffect} from "react";
import {getAnnouncements} from "../redux/actions/announcementActions";
import LaundryRoomService from "../services/LaundryRoomService";
import {login} from "../redux/actions";
import AnnouncementService from "../services/AnnouncementService";

function MachineManagement(props) {

    const theRoom = props.location.state;
    console.log("The RRoom: ", theRoom);
    // Talha'nın backend değişikliğinden sonra çalışacak:
    // let ann =  AnnouncementService.getAnnouncement(theRoom.announcements);
    // console.log(ann);
    console.log("COME INSIDE TO MACHINE MANAGEMENT");
    let announcement = {"title": "title", "body": "body"};

    let data = {
        "laundryRoomId": theRoom._id
    }

    useEffect(() => {
        // trigger room load from backend
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

    return (!announcement ? <Loading/> :
        <div>
            <Helmet>
                <title>LaundryWise | Machine Management</title>
            </Helmet>
            <br/>
            <Grid container id="MachineManagementGrid">
                <Grid item xs={5} id="RoomInfoGrid">
                    <RoomInfoComponent
                        room={theRoom}
                    />
                    <br/>
                    <WorkingHoursComponent
                        onClick={(start, end) => handleSave(start, end)}
                        room={theRoom}
                    />
                </Grid>
                <br/>
                <Grid item xs={7} id="RoomAnnouncementsGrid">
                    <AnnouncementsComponent
                        announcement={announcement}
                        room={theRoom}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

// export default MachineManagement;
export default connect(null, {getAnnouncements})(
    MachineManagement
);


