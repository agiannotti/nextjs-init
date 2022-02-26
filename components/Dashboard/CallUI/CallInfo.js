import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import { PauseIcon } from "@heroicons/react/solid";
const CallInfo = () => {
  return (
    <div className="flex flex-col grow bg-white m-12 mt-6 h-4/6 rounded-2xl shadow-xl">
      <div className="flex items-center justify-center m-auto">
        <div className="flex flex-col bg-primary h-20 w-20 m-2 justify-center items-center rounded-xl border border-gray-300">
          <UserIcon className="h-8 text-gray" />
          <PauseIcon className="h-6 text-white mt-1" />
        </div>
      </div>
      <div className="ml-4 mb-4 text-gray-500  text-sm leading-3">
        +1 (440) 271-5891
      </div>
    </div>
  );
};

export default CallInfo;
