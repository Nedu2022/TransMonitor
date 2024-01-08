import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets";
import GraphChart from "./GraphChart";
import Orders from "./Orders";
import Payments from "./Payments";
import NumberDropdown from "./NumberDropdown";
import SearchInput from "./SearchInput";
import ItemsDropdown from "./ItemsDropdown";
import CustomTable from "./CustomTable";
import dummyData from "./DummyData";

const Home = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberChange = (number) => {
    setSelectedNumber(number);
  };

  const [selectedOption, setSelectedOption] = useState("All");
  const options = [
    "All",
    "Reconciled",
    "Un-Reconciled",
    "Settled",
    "Unsettled"
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {/* Sidebar and Navbar Container */}

      {/* Sidebar */}
      <div className="">{isSidebarOpen && <Sidebar />}</div>
      {/* Navbar */}
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-1 h-screen ml-72">
        {/* Main Content Area */}
        <div className="flex flex-col h-screen flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="bg-primary flex flex-col mt-10 space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col justify-evenly">
              <Widgets />
              <div className="flex justify-evenly mt-8 xl:px-10 p-0">
  <div className="xl:w-fit lg:w-[80rem]">
                  <GraphChart />
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <Orders />
                  <Payments />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-black text-bold text-xl mt-14 pl-12">
                Payments
              </h1>
              <div className="flex items-center justify-evenly mt-2">
                <p>Showing</p>
                <NumberDropdown
                  onChange={handleNumberChange}
                  selectedNumber={selectedNumber}
                />
                <p>Out of 500 payments</p>
                <SearchInput />
                <ItemsDropdown
                  onSelect={handleSelect}
                  options={options}
                  selectedOption={selectedOption}
                />
              </div>
              <div className="mt-4">
                <CustomTable data={dummyData} />
              </div>
              <div>
                
              </div>
              <div className="py-5 flex items-center justify-around">
                <p>Showing 1 to 10 of 500 entries</p>
                <div className="flex">
                  <button className="border px-4 py-2  rounded-sm">Previous</button>
                  <button className="border px-4 py-2 bg-blue text-white rounded-sm">1</button>
                  <button className="rounded-sm border px-4 py-2">2</button>
                  <button className="border px-4 py-2">Next</button>
                </div>
              </div>
            </div>
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
