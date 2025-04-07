"use client";
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
