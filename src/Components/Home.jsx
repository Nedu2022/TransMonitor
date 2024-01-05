import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

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
          <div className="p-8 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
