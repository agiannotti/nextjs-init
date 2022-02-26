import {
  ArchiveIcon,
  BanIcon,
  FlagIcon,
  InboxIcon,
  PencilAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const sidebarNavigation = [
  { name: "Open", href: "#", icon: InboxIcon, current: true },
  { name: "Archive", href: "#", icon: ArchiveIcon, current: false },
  { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: BanIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilAltIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col">
        <div className="min-h-0 flex-1 flex overflow-hidden">
          <nav
            aria-label="Sidebar"
            className="hidden md:block md:flex-shrink-0 md:bg-primary md:overflow-y-auto rounded-l-2xl ml-1 my-1 "
          >
            <div className="relative w-20 flex flex-col p-3 space-y-3">
              {sidebarNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-accent"
                      : "text-white hover:bg-white hover:text-accent",
                    "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
