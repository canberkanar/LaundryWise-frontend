import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function MainMenu() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Main Menu</title>
            </Helmet>

            <br/>
            <Grid container id="LaundryRoomsGrid">
                <Grid item xs={5} id="RoomPanelGrid">
                    <RoomInfoComponent/>
                    <br/>
                    <RoomInfoComponent/>
                </Grid>
                <br/>
                <Grid item xs={7} id="StatisticsGrid">
                    <RoomInfoComponent/>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainMenu;
// export default connect()(withRouter(UserLoginView));
