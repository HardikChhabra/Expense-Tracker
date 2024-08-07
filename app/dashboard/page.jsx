'use client'

import Navbar from "../components/Navbar";
import PrimaryDashboard from "../components/PrimaryDashboard";
import { username } from "../context/context";

const page = () => {
  return (
    <>
        <username.Provider value="Hardik">
          <PrimaryDashboard />
        </username.Provider>
    </>
  )
}

export default page