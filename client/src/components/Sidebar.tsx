import { UserButton } from "@clerk/clerk-react";
import { ActivityIcon, HouseIcon, CreditCard, Clock9 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = React.useState("Dashboard");
  const navigate = useNavigate()

  const sidebarItems = [
    { name: "Dashboard", href: "/dashboard", icon: <HouseIcon size={18} /> },
    { name: "Monitors", href: "/monitors", icon: <ActivityIcon size={18} /> },
    { name: "Cron Jobs", href: "/cron", icon: <Clock9 size={18} /> },
    { name: "Billing", href: "/billing", icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="py-5 px-2 border flex flex-col items-center">
      <div>
        <img src="/logo-icon.png" alt="logo" className="w-10" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="mt-5">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className={`flex gap-3 items-center space-x-2 p-3 rounded-xl cursor-pointer w-[15vw] hover:bg-opacity-5 bg-gray-100 mt-1 ${
                active === item.name ? "bg-opacity-10" : "bg-opacity-0"
              }`}
              onClick={() => {
                setActive(item.name);
                navigate(item.href);
              }}
            >
              {item.icon}
              <a className="text-sm">{item.name}</a>
            </div>
          ))}
        </div>

        <div>
          <div
            className={`flex gap-3 items-center space-x-2 p-3 rounded-xl cursor-pointer bg-opacity-0 w-[15vw] hover:bg-opacity-5 bg-gray-100 mt-1`}
          >
            <UserButton />
            <a className="text-sm">Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
