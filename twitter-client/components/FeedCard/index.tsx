import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { MdOutlineFileUpload, MdOutlineSignalCellularAlt } from "react-icons/md";

const FeedCard: React.FC = () => {
    return <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt="user-image" height={50} width={50} />
            </div>
            <div className="col-span-11">
                <h5 className="font-bold">Aditya Potphode</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eaque eveniet iste. Nostrum aut laudantium nulla non perferendis placeat eos.</p>
                <div className="flex justify-between mt-4 text-xl items-center p-2 w-[90%]">
                    <div>
                    <BiMessageRounded />
                    </div>
                    <div>
                    <FaRetweet />
                    </div>
                    <div>
                    <GoHeart />
                    </div>
                    <div>
                    <MdOutlineSignalCellularAlt />
                    </div>
                    <div>
                    <MdOutlineFileUpload  />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FeedCard;