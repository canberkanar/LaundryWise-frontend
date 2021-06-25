import {Grid, Paper} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function RevenueStatistics() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Revenue Statistics</title>
            </Helmet>

            <br/>
            <Paper>
                <h1>Revenue Statistics</h1>
            </Paper>

        </div>
    );
}

// export default RevenueStatistics;
export default connect()(RevenueStatistics);

// export default connect()(withRouter(UserLoginView));
