import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Dashboard from "components/Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="container flex flex-col h-screen m-auto">
      <div className="flex flex-1 my-2 mx-1 bg-white rounded-2xl shadow-2xl">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
