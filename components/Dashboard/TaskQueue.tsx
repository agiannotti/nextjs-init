import React from "react";
import { ChatAlt2Icon, PhoneIcon, ChatIcon } from "@heroicons/react/outline";

const projects = [
  {
    name: "SMS",
    icon: <ChatAlt2Icon className="h-6" />,
    href: "#",
    members: 16,
    bgColor: "bg-yellow-600",
  },
  {
    name: "SMS",
    icon: <ChatAlt2Icon className="h-6" />,
    href: "#",
    members: 12,
    bgColor: "bg-yellow-600",
  },
  {
    name: "Phone Call",
    icon: <PhoneIcon className="h-6" />,
    href: "#",
    members: 16,
    bgColor: "bg-red-500",
  },
  {
    name: "Chat Message",
    icon: <ChatIcon className="h-6" />,
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TaskQueue = () => {
  return (
    <div className="w-1/3 bg-white rounded-3xl mx-3 mb-3 shadow-2xl border border-silver">
      <h2 className="flex text-primary text-xs tracking-wide pb-4 shadow-xl bg-white rounded-t-3xl">
        <p className="relative top-2 left-4">Task Queue</p>
      </h2>
      <ul className="flex flex-col">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex drop-shadow-xl rounded-2xl m-1 h-20"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-2xl"
              )}
            >
              {project.icon}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-2xl truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href={project.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex items-center px-2.5 py-1.5 mr-3 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Accept
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskQueue;
