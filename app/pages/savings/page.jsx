"use client";
import React, { useState, useEffect } from "react";
import SavingsTile from "../../components/SavingsTile";
import { goalsList } from "../../data";

const page = () => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    setGoals(goalsList);
  }, []);
  return (
    <h1 className="flex flex-col text-center items-center content-center">
      Coming soon
    </h1>
  );
};

export default page;

/* <>
      <div className="flex flex-row mt-8 justify-between px-32">
        <div className="text-3xl font-medium text-grey-900">Savings</div>
      </div>
      <div className="w-[64vw] mx-auto grid grid-cols-2">
        {goals &&
          goals.map((goal) => (
            <div key={goal.goalName} className="col-span-1">
              <SavingsTile
                primaryColor={goal.primaryColor}
                primaryText={goal.goalName}
                secondaryColor={goal.secondaryColor}
                goalVal={goal.goalVal}
                savingsVal={goal.savingsVal}
                time={goal.time}
              />
            </div>
          ))}
      </div>
    </> */
