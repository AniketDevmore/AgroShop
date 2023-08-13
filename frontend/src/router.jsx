import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Admin } from "./components/AdminPage/Admin";
import Cart from "./components/Cart/Cart";
import NewLogin from "./components/Login/NewLogin";
import { Account } from "./components/Account/Account";
import WishList from "./components/wishlist/WishList";
import AboutUs from "./components/aboutUs/AboutUs";
import ReachUs from "./components/reachUs/ReachUs";
import MediaLinks from "./components/mediaLinks/MediaLinks";
import PrivacyPolicy from "./components/privacyPolocy/PrivacyPolicy";
import Orders from "./components/orders/Orders";
import { NewSignUp } from "./components/Signup/NewSignUp";
import AddProduct from "./components/AdminPage/addProduct/AddProduct";
import RemoveProduct from "./components/AdminPage/removeProduct/RemoveProduct";
import EditProduct from "./components/AdminPage/editProduct/EditProduct";
import EditOrder from "./components/AdminPage/editOrder/EditOrder";
import CancelOrder from "./components/AdminPage/cancelOrder/CancelOrder";
import AllProducts from "./components/allProduct/AllProducts";
import SingleProduct from "./components/singleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NewLogin />,
  },
  {
    path: "/signup",
    element: <NewSignUp />,
  },
  {
    path: "/aboutUs/:id",
    element: <AboutUs />,
  },
  {
    path: "/reachUs/:id",
    element: <ReachUs />,
  },
  {
    path: "/mediaLinks/:id",
    element: <MediaLinks />,
  },
  {
    path: "/privacyPolicy/:id",
    element: <PrivacyPolicy />,
  },
  {
    path: "/mainPage/:id",
    element: (
      <PrivateRoute>
        <MainPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/cart/:id",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    path: "/account/:id",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
  },
  {
    path: "/wishlist/:id",
    element: (
      <PrivateRoute>
        <WishList />
      </PrivateRoute>
    ),
  },
  {
    path: "/product/:type",
    element: (
      <PrivateRoute>
        <AllProducts />
      </PrivateRoute>
    ),
  },
  {
    path: "/product-information/:id",
    element: (
      <PrivateRoute>
        <SingleProduct />
      </PrivateRoute>
    ),
  },
  {
    path: "/adminPage/:id",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/adminPage/:id/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/adminPage/:id/removeProduct",
        element: <RemoveProduct />,
      },
      {
        path: "/adminPage/:id/editProduct",
        element: <EditProduct />,
      },
      {
        path: "/adminPage/:id/editOrder",
        element: <EditOrder />,
      },
      {
        path: "/adminPage/:id/cancelOrder",
        element: <CancelOrder />,
      },
    ],
  },
  {
    path: "/orders/:id",
    element: (
      <PrivateRoute>
        <Orders />
      </PrivateRoute>
    ),
  },
]);
