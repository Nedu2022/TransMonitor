import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets";
import GraphChart from "./GraphChart";
import Orders from "./Orders";
import Payments from "./Payments";
import Table from "./Table";  // Import your Table component

const Home = () => {
  // Sample data and columns
  const sampleData = [
    // your data here
  ];

  const sampleColumns = [
    // your columns here
  ];

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
          <div className="px-14 py-8 bg-primary h-screen flex-1 flex flex-col overflow-auto">
            <div>
              <Widgets />
            </div>
            <div className="flex items-center w-full space-x-8 mt-10">
              <GraphChart />
              <div className="flex flex-col items-center space-y-4">
                <Orders />
                <Payments />
              </div>
            </div>

            <h1 className="text-black text-bold text-xl mt-14">Payments</h1>
            
            {/* Use your Table component with the sample data and columns */}
            <Table data={sampleData} columns={sampleColumns} />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
