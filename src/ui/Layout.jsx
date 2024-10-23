import Navbar from "./Navbar";

import { Offline } from "react-detect-offline";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="container ">
        <Outlet />
        <Offline>
          <div className="network">
            <i className="fa fa-wifi pe-2"></i> You Are Currently Offline !!
          </div>
        </Offline>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
