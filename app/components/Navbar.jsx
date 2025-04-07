"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState(null);

  const listVals = [
    {
      url: "/",
      text: "Dashboard",
      id: 1,
    },
    {
      url: "/pages/transactions",
      text: "Transactions",
      id: 2,
    },
    {
      url: "/pages/analytics",
      text: "Analytics",
      id: 3,
    },
    {
      url: "/pages/savings",
      text: "Savings",
      id: 4,
    },
    {
      url: "/pages/accounts",
      text: "Accounts",
      id: 5,
    },
  ];

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/moneylogo.gif" className="h-8" alt="website logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            financ
          </span>
        </Link>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            {listVals.map((item, index) => (
              <li key={index} onClick={() => setSelected(index)}>
                <Link
                  href={item.url}
                  className={`block py-2 px-3 text-gray-900 ${
                    selected === index ? "text-blue-700" : "text-gray-900"
                  } rounded md:bg-transparent md:hover:text-blue-700 md:p-0`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row">
          <Link href="/settings">
            <img className="w-6 mx-2" src="/settings.gif" alt="Settings" />
          </Link>
          <Link href="/notifications">
            <img className="w-6" src="/notification.gif" alt="Notifications" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
