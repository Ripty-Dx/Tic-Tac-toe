import React from "react";
import "./Logo.css";

const History = () => {
  return (
    <div className="history gap-3">
      <div className="bg-blue p-2">
        <div>PLAYER X</div>
        <div className="score">0</div>
      </div>
      <div className=" p-2" style={{ backgroundColor: "#BCDBF9" }}>
        <div>DRAW</div>
        <div className="score">0</div>
      </div>
      <div className="bg-yellow p-2">
        <div>PLAYER O</div>
        <div className="score">0</div>
      </div>
    </div>
  );
};

export default History;
