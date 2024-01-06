import React from "react";

const Orders = () => {
  return (
    <div className="bg-white p-3 space-x-4 text-left space-y-2">
      <h1 className="text-black pl-3">Orders</h1>
      <img src="/images/Radar.png" alt="Radar" />
      <h2>
        Pending Orders : <span className="text-yellow">20</span>
      </h2>
      <h2>
        Reconciled Orders : <span className="text-green">80</span>
      </h2>
      <h2>
        Total Orders : <span className="text-blue">100</span>
      </h2>
    </div>
  );
};

export default Orders;
