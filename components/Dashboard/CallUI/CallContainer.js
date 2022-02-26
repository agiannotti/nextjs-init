import React from "react";
import CallControl from "./CallControl";
import CallInfo from "./CallInfo";
import Timer from "./Timer";

const CallContainer = () => {
  return (
    <div className="flex grow bg-white rounded-3xl mb-3 mx-2 shadow-xl p-4">
      {/* <div className="flex flex-col justify-center m-auto grow bg-white rounded-3xl mx-16 mt-3 shadow-md h-4/5 p-2">
      <CallInfo />
        <Timer />
        <CallControl />
      </div> */}
    </div>
  );
};

export default CallContainer;
