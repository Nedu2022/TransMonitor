import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white text-white shadow-lg fixed w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-blue text-lg font-bold ml-8">TransMonitor</h1>

        {/* Search Bar */}
        <div className="absolute left-1/4">
          <span className="flex items-center">
            <img src="/images/Search.svg" alt="Search" className="w-4" />
            <h3 className="text-secondary ml-4">Search...</h3>
          </span>
        </div>

        <div className="flex items-center space-x-10  mr-10 text-secondary">
          {/* Support and FAQ */}
          <div className="flex p-4 items-center space-x-10">
            <h1>Support</h1>
            <h1>FAQ</h1>
          </div>

          {/* Notification */}
          <div>
            <img
              className="w-6"
              src="/images/Notification.svg"
              alt="Notification"
            />
          </div>

          {/* User Info */}
          <div className="flex justify-between p-4 red-border-b items-center">
            <div className="flex flex-col items-end pr-3">
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

export default Navbar;
