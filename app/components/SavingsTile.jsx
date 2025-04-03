import React from "react";

const SavingsTile = ({
  primaryText,
  primaryColor,
  secondaryColor,
  goalVal,
  savingsVal,
  time,
}) => {
  return (
    <div
      className="block pt-1 px-4 border pb-8 m-4 border-gray-200 rounded-lg shadow hover:bg-gray-100"
      style={{ backgroundColor: `${primaryColor}` }}
    >
      <div style={{ color: `${secondaryColor}` }}>
        <h5 className="text-lg font-semibold">{primaryText}</h5>
      </div>
      <div className="flex flex-col">
        <div
          className="flex flex-row justify-between text-xs pt-4 pb-1 font-extralight"
          style={{ color: `${secondaryColor}` }}
        >
          <h6>Balance</h6>
          <h6>{(1 - (goalVal - savingsVal) / goalVal) * 100}%</h6>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
          <div
            className={`h-1 rounded-full`}
            style={{
              width: `${(1 - (goalVal - savingsVal) / goalVal) * 100}%`,
              backgroundColor: `${secondaryColor}`,
            }}
          ></div>
        </div>
        <div
          className="flex flex-row justify-between text-xs font-extralight"
          style={{ color: `${secondaryColor}` }}
        >
          <h5>
            <span className="text-lg font-semibold">${savingsVal}</span> of $
            {goalVal}
          </h5>
          <p className="pt-2">{time} left</p>
        </div>
      </div>
    </div>
  );
};

export default SavingsTile;
