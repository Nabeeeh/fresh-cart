import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";

import UserContextProvider from "../src/Context/UserContext";

import Layout from "./ui/Layout";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProtectedLogin from "./ui/ProtectedLogin";

const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Brands = lazy(() => import("./pages/Brands"));
const Categories = lazy(() => import("./pages/Categories"));
const AllOrders = lazy(() => import("./pages/AllOrders"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./ui/NotFound"));
const Profile = lazy(() => import("./pages/Profile"));
const WishList = lazy(() => import("./pages/WishList"));

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
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
              />
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/brands",
        element: (
          <Suspense
            fallback={
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
              />
            }
          >
            <Brands />
          </Suspense>
        ),
      },
      {
        path: "/products/productDetails/:productID",
        element: (
          <Suspense
            fallback={
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
              />
            }
          >
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <Cart />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: (
          <Suspense
            fallback={
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
              />
            }
          >
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <Checkout />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <WishList />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <AllOrders />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <Profile />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedLogin>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <Login />
            </Suspense>
          </ProtectedLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedLogin>
            <Suspense
              fallback={
                <TailSpin
                  visible={true}
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass="justify-content-center"
                />
              }
            >
              <Register />
            </Suspense>
          </ProtectedLogin>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <TailSpin
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="justify-content-center"
              />
            }
          >
            <NotFound />
          </Suspense>
        ),
      },
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
