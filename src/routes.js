import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import RoomSettings from "./views/RoomSettings";
import MainMenu from "./views/MainMenu";
import UsageStatistics from "./views/UsageStatistics";
import RevenueStatistics from "./views/RevenueStatistics";
import MachineSettings from "./views/MachineSettings";
import AdminRoomReservationsView from "./views/AdminRoomReservationsView";
import ReserveView from "./views/ReserveView";
import MachineDetailsView from "./views/AddMachineView"
import AddMachineView from "./views/AddMachineView";
import EditMachineView from "./views/EditMachineView";
import SuccessView from "./views/SuccessView";
import UserProfileView from "./views/UserProfileView";


// routes

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
        path: "/roomSettings",
        component: RoomSettings,
        exact: true,

    },
    {
        path: "/machineSettings",
        component: MachineSettings,
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
    {
        path: "/paymentSuccess",
        component: SuccessView,
        exact: true,
    },
    {
        path: "/profile",
        component: UserProfileView,
        exact: true,
    },
];

export default routes;
