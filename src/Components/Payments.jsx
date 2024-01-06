import React from "react";

const Orders = () => {
  return (
    <div className="bg-white p-3 space-x-4 text-left space-y-2">
      <h1 className="text-black pl-3">Payments</h1>
      <img src="/images/Radar.png" alt="Radar" />
      <h2>
        Un-reconciled Payments: <span className="text-yellow">20</span>
      </h2>
      <h2>
        Reconciled Payments: <span className="text-green">80</span>
      </h2>
      <h2>
        Total Payments: <span className="text-blue">100</span>
      </h2>
    </div>
  );
};

export default Orders;
