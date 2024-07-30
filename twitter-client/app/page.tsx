import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3">
        <BsTwitter />
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
