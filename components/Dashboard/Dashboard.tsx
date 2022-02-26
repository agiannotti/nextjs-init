import React from "react";
import TaskQueue from "components/Dashboard/TaskQueue";
import Header from "./Header";
import CallContainer from "./CallUI/CallContainer";

const Dashboard = () => {
  return (
    <div className="container flex flex-col">
      <Header />
      <div className="flex flex-row h-full">
        <TaskQueue />
        <CallContainer />
      </div>
    </div>
  );
};

export default Dashboard;
