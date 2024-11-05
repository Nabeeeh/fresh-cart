import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import UserContextProvider from "../src/Context/UserContext";

import Layout from "./ui/Layout";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import AllOrders from "./pages/AllOrders";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./ui/NotFound";
import Profile from "./pages/Profile";
import WishList from "./pages/WishList";
import ProtectedLogin from "./ui/ProtectedLogin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/brands",
        element: <Brands />,
      },
      {
        path: "/products/productDetails/:productID",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedLogin>
            <Login />
          </ProtectedLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedLogin>
            <Register />
          </ProtectedLogin>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default App;
