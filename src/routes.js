import MovieListView from "./views/MovieListView";
import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import MachineManagementView from "./views/MachineManagement";
import MainMenu from "./views/MainMenu";
import UsageStatistics from "./views/UsageStatistics";
import RevenueStatistics from "./views/RevenueStatistics";
import RoomManagement from "./views/RoomManagement";

// routes within the movie database example app
// used for routing

const routes = [
    {
        path: "/",
        component: MovieListView,
        exact: true,
    },
    {
        path: "/login",
        component: UserLoginView,
    },
    {
        path: "/register",
        component: SignUpView,
    },
    {
        path: "/movie/:id",
        component: MovieDetailsView,
    },
    {
        path: "/machineManagement",
        component: MachineManagementView,
    },
    {
        path: "/roomManagement",
        component: RoomManagement,
    },
    {
        path: "/mainMenu",
        component: MainMenu,
    },
    {
        path: "/usageStatistics",
        component: UsageStatistics,
    },
    {
        path: "/revenueStatistics",
        component: RevenueStatistics,
    }
];

export default routes;
