import {Grid} from "@material-ui/core";
import { Helmet } from 'react-helmet';
import RoomInfoComponent from "../components/RoomInfoComponent";
import WorkingHoursComponent from "../components/WorkingHoursComponent";
import AnnouncementsComponent from "../components/AnnouncementsComponent";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function UsageStatistics() {

    return (
        <div>
            <Helmet>
                <title>LaundryWise | Usage Statistics</title>
            </Helmet>

            <br/>

        </div>
    );
}

export default UsageStatistics;
// export default connect()(withRouter(UserLoginView));
