import MovieListView from "./views/MovieListView";
import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import MachineManagementView from "./views/MachineManagement";
import MainMenu from "./views/MainMenu";
import UsageStatistics from "./views/UsageStatistics";
import RevenueStatistics from "./views/RevenueStatistics";
import RoomManagement from "./views/RoomManagement";
import AdminRoomReservationsView from "./views/AdminRoomReservationsView";
import ReserveView from "./views/ReserveView";
import MachineDetailsView from "./views/AddMachineView"
import AddMachineView from "./views/AddMachineView";
import EditMachineView from "./views/EditMachineView";
// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: MainMenu,
        exact: true,
    },
    {
        path: "/login",
        component: UserLoginView,
        exact: true,

    },
    {
        path: "/register",
        component: SignUpView,
        exact: true,

    },
    {
        path: "/movie/:id",
        component: MovieDetailsView,
        exact: true,

    },
    {
        path: "/machineManagement",
        component: MachineManagementView,
        exact: true,

    },
    {
        path: "/roomManagement",
        component: RoomManagement,
        exact: true,

    },
    {
        path: "/mainMenu",
        component: MainMenu,
        exact: true,

    },
    {
        path: "/usageStatistics",
        component: UsageStatistics,
        exact: true,

    },
    {
        path: "/revenueStatistics",
        component: RevenueStatistics,
        exact: true,

    },
    {
        path: "/admin/laundryroom/:id",
        component: AdminRoomReservationsView,
        exact: true,

    },
    {
        path: "/reserve/:id",
        component: ReserveView,
        exact: true,

    },
    {
        path: "/addMachine",
        component: AddMachineView,
        exact: true,

    },
    {
        path: "/editMachine",
        component: EditMachineView,
        exact: true,

    },

];

export default routes;
