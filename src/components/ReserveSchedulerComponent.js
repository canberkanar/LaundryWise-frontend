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
import {common, green, red} from "@material-ui/core/colors";
import TableCell from "@material-ui/core/TableCell";
import reserveSchedulerMapper from "../mappers/ReserveSchedulerMapper";

function ReserveSchedulerComponent(props) {

    const schedulerDataSource = reserveSchedulerMapper(props.laundryroom);
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

// #FOLD_BLOCK
    const CellBase = React.memo(
        ({
             classes,
             startDate,
             formatDate,
             otherMonth
             // #FOLD_BLOCK
         }) => {
            const isFirstMonthDay = startDate.getDate() === 1;
            const formatOptions = isFirstMonthDay
                ? {day: "numeric", month: "long"}
                : {day: "numeric"};
            return (
                <TableCell
                    tabIndex={0}
                >

                </TableCell>
            );
        }
    );


    const Appointment = ({children, style, ...restProps}) => (
        <Appointments.Appointment
            {...restProps}

            onClick={(event) => props.addReservation(event.data)}

        >
            {children}
        </Appointments.Appointment>
    );

    const AppointmentContent = withStyles(styles, {name: 'AppointmentContent'})(({
                                                                                     classes,
                                                                                     data,
                                                                                     formatDate,
                                                                                     ...restProps
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


    const TimeTableCell = withStyles(styles, {name: "Cell"})(CellBase);

    return (
        <React.Fragment>
            <Paper>
                <Scheduler
                    data={schedulerDataSource} firstDayOfWeek="1">
                    <ViewState
                        defaultCurrentDate={props.selectedDate}
                        // onCurrentDateChange={currentDateChange}
                    />

                    <WeekView startDayHour={0} endDayHour={24} cellDuration='60'/>
                    <Toolbar/>
                    <DateNavigator/>
                    <TodayButton/>
                    <Appointments appointmentComponent={Appointment}
                                  appointmentContentComponent={AppointmentContent}
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

export default ReserveSchedulerComponent;
