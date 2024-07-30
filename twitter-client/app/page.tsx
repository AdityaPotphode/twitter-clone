import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { RiHome7Line } from "react-icons/ri";
import React from "react";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { 
    title: 'Home', 
    icon: <RiHome7Line /> 
  }
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-8 px-4">
        <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all w-fit">
          <BsTwitter />
        </div>
        <div className="mt-4 text-2xl font-bold">
          <ul>
            {sidebarMenuItems.map(item => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 w-fit" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
