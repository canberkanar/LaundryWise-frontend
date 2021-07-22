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
            cell: {
                color: "#78909C!important",
                position: "relative",
                userSelect: "none",
                verticalAlign: "top",
                padding: 0,
                height: 30,
                "&:first-child": {
                    borderLeft: "none"
                },
                "&:last-child": {
                    paddingRight: 0
                },
                "tr:last-child &": {
                    borderBottom: "none"
                },
                "&:hover": {
                    backgroundColor: "white"
                },
            },
            content: {
                display: "flex",
                justifyContent: "center",
                width: "50%",
                height: "50%",
                position: "absolute",
                alignItems: "center"
            },
            text: {
                padding: "0.5em",
                textAlign: "center"
            },
            opacity: {
                opacity: "0.5"
            },
            appointment: {
                borderRadius: "10px",
                "&:hover": {
                    opacity: 0.6
                }
            },
            apptContent: {
                "&>div>div": {
                    whiteSpace: "normal !important",
                    lineHeight: 1.2
                }
            },
            flexibleSpace: {
                flex: "none"
            },
            flexContainer: {
                display: "flex",
                alignItems: "center"
            },
            tooltipContent: {
                padding: theme.spacing(3, 1),
                paddingTop: 0,
                backgroundColor: theme.palette.background.paper,
                boxSizing: "border-box",
                width: "400px"
            },
            tooltipText: {
                ...theme.typography.body2,
                display: "inline-block"
            },
            title: {
                ...theme.typography.h6,
                color: theme.palette.text.secondary,
                fontWeight: theme.typography.fontWeightBold,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            },
            icon: {
                color: theme.palette.action.active,
                verticalAlign: "middle"
            },
            circle: {
                width: theme.spacing(4.5),
                height: theme.spacing(4.5),
                verticalAlign: "super"
            },
            textCenter: {
                textAlign: "center"
            },
            dateAndTitle: {
                lineHeight: 1.1
            },
            titleContainer: {
                paddingBottom: theme.spacing(2)
            },
            container: {
                height: 1000,
                paddingBottom: theme.spacing(5)
            }
        })
    ;

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


    const AppointmentContent = withStyles(styles, {
        name: "AppointmentContent"
    })(({classes, ...restProps}) => (
        <Appointments.AppointmentContent
            {...restProps}
            className={classes.apptContent}
        />
    ));

    const Appointment = ({
                             children, style, ...restProps
                         }) => (
        <Appointments.Appointment
            {...restProps}
            style={{
                ...style,
                // backgroundColor: '#FFC107',
                // borderRadius: '8px',
                // height: "50%",
            }}
        >
            {children}
        </Appointments.Appointment>
    );

    const TimeTableCell = withStyles(styles, {name: "Cell"})(CellBase);

    return (
        <React.Fragment>
            <Paper>
                <Scheduler
                    data={schedulerDataSource} firstDayOfWeek="1">
                    <ViewState
                        defaultCurrentDate={props.selectedDate}
                    />

                    <WeekView startDayHour={0} endDayHour={24} cellDuration='60'
                              timeTableCellComponent={TimeTableCell}
                    />
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

export default AdminSchedulerComponent;
