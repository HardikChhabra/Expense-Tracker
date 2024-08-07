'use client'
import Navbar from "./components/Navbar";
import PrimaryDashboard from "./components/PrimaryDashboard";
import { username } from "./context/context";

export default function Home() {


  return (
    <>
        <username.Provider value="Hardik">
          <PrimaryDashboard />
        </username.Provider>
    </>
  );
}
