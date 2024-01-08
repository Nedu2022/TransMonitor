import React from "react";

const Sidebar = () => {
  return (
    <div className=" h-screen bg-white w-72 overflow-auto pt-32 z-10 fixed left-0 top-0">
      <div className="">
        {/* Generate Invoice Button */} 
        <span className="bg-green rounded-full text-white ml-8 p-3 px-10 uppercase">
          Generate Invoice
        </span>

        <div className="mt-14">
          {/* Main Section */}
          <p className="pl-8">Main</p>

          {/* Overview Section */}
          <span className="mt-4 flex items-center bg-liblue py-3 px-8 border-l-4 border-blue w-full">
            <img src="/images/Overview.svg" alt="Overview" className="mr-2" />
            Overview
          </span>

          {/* Payments Section */}
          <p className="mt-10 pl-8">Payments</p>

          <div className="flex flex-col mt-4 pl-8">
            {/* All Payments */}
            <span className="flex items-center">
              <img src="/images/Payments.svg" alt="Payments" className="mr-2" />
              All Payments
            </span>

            {/* Reconciled Payments */}
            <span className="flex items-center mt-4">
              <img
                src="/images/Reconciled.svg"
                alt="Reconciled"
                className="mr-2"
              />
              Reconciled Payments
            </span>

            {/* Un-Reconciled Payments */}
            <span className="flex items-center mt-4">
              <img
                src="/images/Unreconciled.svg"
                alt="Un-Reconciled"
                className="mr-2"
              />
              Un-Reconciled Payments
            </span>

            {/* Manual Settlement */}
            <span className="flex items-center mt-4">
              <img src="/images/Manual.svg" alt="Manual" className="mr-2" />
              Manual Settlement
            </span>
          </div>

          {/* Orders Section */}
          <p className="title mt-6 pl-8">Orders</p>

          <div className="flex flex-col mt-4 pl-8">
            {/* All Orders */}
            <span className="flex items-center">
              <img src="/images/Orders.svg" alt="Orders" className="mr-2" />
              All Orders
            </span>

            {/* Pending Orders */}
            <span className="flex items-center mt-4">
              <img
                src="/images/Pending-Orders.svg"
                alt="Pending-Orders"
                className="mr-2"
              />
              Pending Orders
            </span>

            {/* Reconciled Orders */}
            <span className="flex items-center mt-4">
              <img
                src="/images/Reconciled-Orders.svg"
                alt="Reconciled-Orders"
                className="mr-2"
              />
              Reconciled Orders
            </span>
          </div>

          {/* Merchant Profile Section */}
          <div className="mt-12 pl-8">
            <span className="flex items-center">
              <img src="/images/User.svg" alt="User" className="mr-2" />
              Merchant Profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
