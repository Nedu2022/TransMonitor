import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets";
import GraphChart from "./GraphChart";
import Orders from "./Orders";
import Payments from "./Payments";

const Home = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/6">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="p-8 bg-primary flex-1 flex flex-col items-center text-center">
            <div>
              <Widgets />

              <div className="flex items-center space-x-8 mt-10">
  <GraphChart />
  <div className="flex flex-col items-center space-y-4">
    <Orders />
    <Payments />
  </div>
</div>

            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired
};

export default Home;
