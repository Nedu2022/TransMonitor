import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white text-white shadow-lg fixed sm:py-2 w-full z-50">

      <div className="flex justify-between items-center">
      <button onClick={toggleSidebar} className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="blue"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
        <h1 className="text-blue sm:text-md lg:text-lg font-bold ml-8">TransMonitor</h1>

        {/* Search Bar */}
        <div className="absolute left-1/4">
          <span className="lg:flex sm:hidden items-center">
            <img src="/images/Search.svg" alt="Search" className="w-4" />
            <h3 className="text-secondary ml-4">Search...</h3>
          </span>
        </div>

        <div className="flex items-center space-x-10 sm:mr-3 mr-10 text-secondary">
          {/* Support and FAQ */}
          <div className="lg:flex sm:hidden p-4 items-center space-x-10">
            <h1>Support</h1>
            <h1>FAQ</h1>
          </div>

          {/* Notification */}
          <div className="lg:flex sm:hidden">
            <img
              className="w-6"
              src="/images/Notification.svg"
              alt="Notification"
            />
          </div>

          {/* User Info */}
          <div className="flex justify-between p-4 sm:p-0 red-border-b items-center">
            <div className="flex flex-col sm:text-xs sm:pr-1 items-end lg:pr-3">
              <h1 className="">Hello</h1>
              <h1 className="">Oluwaleke Ojo</h1>
            </div>

            <img className="rounded-3xl w-10" src="/images/Ojo.png" alt="Ojo" />
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
