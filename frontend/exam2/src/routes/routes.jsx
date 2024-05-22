import Admin from "../pages/Admin";
import Details from "../pages/Details";
import Home from "../pages/Home";
import UserRoot from "../pages/User/UserRoot";
import Basket from "../pages/basket";
import Wishlist from "../pages/wishlist";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/detail/:id",
        element: <Details />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];
