import React from "react";

const AnalyticTile = ({ name, per }) => {
  return (
    <li className="inline-flex justify-between max-w-[16vw] pt-1">
      <div className="">{name}</div>
      <div className="text-sm font-semibold text-gray-500">{per}%</div>
    </li>
  );
};

export default AnalyticTile;
