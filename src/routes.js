import MovieListView from "./views/MovieListView";
import UserLoginView from "./views/UserLoginView";
import SignUpView from "./views/SignUpView";
import MovieDetailsView from "./views/MovieDetailsView";
import MachineManagementView from "./views/MachineManagement";
import MainMenu from "./views/MainMenu";

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
        path: "/mainMenu",
        component: MainMenu,
    }
];

export default routes;
