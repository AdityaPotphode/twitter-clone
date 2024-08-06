"use client";

import Image from "next/image";
import { BsPeople, BsTwitterX } from "react-icons/bs";
import React, { useCallback } from "react";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import { FaRegBookmark, FaRegEnvelope } from "react-icons/fa";
import { RiSlashCommands2 } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google"
import { PiDotsThreeCircle } from "react-icons/pi";
import FeedCard from "@/components/FeedCard";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  { 
    title: 'Home', 
    icon: <AiFillHome /> 
  },{
    title:'Explore',
    icon : <FiSearch />
  },{
    title:'Notifications',
    icon : <SlBell />
  },{
    title:'Messages',
    icon : <FaRegEnvelope />
  },{
    title:'Grok',
    icon : <RiSlashCommands2 />
  },{
    title:'Bookmarks',
    icon : <FaRegBookmark />
  },{
    title : 'Communities',
    icon : <BsPeople />
  },{
    title : 'Premium',
    icon : <FaXTwitter />
  },{
    title : 'Profile',
    icon : <IoPersonOutline />
  },{
    title : 'More',
    icon : <PiDotsThreeCircle />
  }
];

export default function Home() {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse)=>{
    
  },[]);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-24">
        <div className="col-span-3 pt-3 px-4">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-3 cursor-pointer transition-all w-fit">
          <BsTwitterX />
          </div>
          <div className="mt-2 text-2xl font-semibold">
            <ul>
              {sidebarMenuItems.map(item => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" key={item.title}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-[#1A8CD8] w-full p-4 rounded-full mt-2">Post</button>
        </div>
        <div className="col-span-5 h-screen overflow-scroll hide-scrollbar  border-r-[1px] border-l-[1px] border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className=" my-2 text-2xl ">New to Twitter?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  );
}
