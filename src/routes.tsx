import { HomeIcon, UserCircleIcon, BellIcon, ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import App from "./App";
// import { Home, Profile, Notifications } from "./pages/dashboard";
// import { SignIn, SignUp } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard/home",
        element: <App />,
      },
     
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      
    ],
  },
]; 