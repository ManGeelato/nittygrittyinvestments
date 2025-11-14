import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
function RootLayOut() {
  return (
    <div>
      <div>
        <div>
       
          <ScrollRestoration />
        </div>
        <main>
        <Navbar/>
          <Outlet />
          <Analytics />
          <Footer/>
        </main>
      </div>
    </div>
  );
}

export default RootLayOut;
