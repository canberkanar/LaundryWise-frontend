/**
 * @author canberk.anar
 */

import {Paper} from "@material-ui/core";

import {
    Scheduler,
    WeekView,
    Appointments,
    Resources, Toolbar, DateNavigator, TodayButton

} from '@devexpress/dx-react-scheduler-material-ui';

import {ViewState} from '@devexpress/dx-react-scheduler';

import 'date-fns';

import React from "react";
import {withStyles} from "@material-ui/core/styles";
import mapToAdminScheduler from "../mappers/AdminSchedulerMapper";
import {common, green, red} from "@material-ui/core/colors";
import TableCell from "@material-ui/core/TableCell";

function AdminSchedulerComponent(props) {

    const schedulerDataSource = mapToAdminScheduler(props.laundryroom);
    const mainResourceName = 'title';

    const resources = [
        {
            fieldName: 'title',
            title: 'Title',
            instances: [
                {id: 'Available', text: 'Available', color: green},
                {id: 'Full', text: 'Full', color: red},
                {id: 'Out of Service', text: 'Out of Service', color: common.black},

            ],
        },
    ];

    const styles = (theme) => ({
        Label: {
            padding: 9,
            paddingTop: 9,
            paddingBottom: theme.spacing(9)
        },
    });

    const AppointmentContent = withStyles({name: 'AppointmentContent'})(({
                                                                             classes, data, formatDate, ...restProps
                                                                         }) => (
        <Appointments.AppointmentContent {...restProps} formatDate={formatDate} data={data}>
            <div className={classes.container}>
                <div className={classes.title}>
                    {data.title}
                </div>

                <div className={classes.textContainer}>
                    <div className={classes.time}>
                        {formatDate(data.startDate, {hour: 'numeric', minute: 'numeric'})}
                    </div>
                    <div className={classes.time}>
                        {' - '}
                    </div>
                    <div className={classes.time}>
                        {formatDate(data.endDate, {hour: 'numeric', minute: 'numeric'})}
                    </div>
                </div>
            </div>
        </Appointments.AppointmentContent>
    ));


    return (
        <React.Fragment>
            <Paper>
                <Scheduler
                    data={schedulerDataSource} firstDayOfWeek="1">
                    <ViewState
                        defaultCurrentDate={props.selectedDate}
                    />

                    <WeekView startDayHour={0} endDayHour={24} cellDuration='60'/>
                    <Toolbar/>
                    <DateNavigator/>
                    <TodayButton/>
                    <Appointments appointmentContentComponent={AppointmentContent}
                    />
                    <Resources
                        data={resources}
                        mainResourceName={mainResourceName}
                    />
                </Scheduler>
            </Paper>
        </React.Fragment>
    )
        ;
}

export default AdminSchedulerComponent;
