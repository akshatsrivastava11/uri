import Image from "next/image";
import Github from "./components/icons/Github";
export default function Home() {
  return (
   <div className="bg-[#1c1c21] min-h-[100vh] text-[#65747b] ">
    <div className="max-w-[50%] mx-auto p-13 flex flex-col gap-4">
    {/* Header */}
    <div className="">
    <h1 className="text-2xl">Hey! I'm Akshat</h1>
    </div>
      {/* Description */}
      <div>
        <div>Software Engineer from Delhi,Contact me below.Currently building mintCraft</div>
      </div>
      {/* Socials */}
      <div className="flex gap-4">
        <a href="https://github.com/akshatsrivastava11"> 
        <Github className="h-10 w-10"/>
        </a>
        <a href="https://github.com/akshatsrivastava11"> 
        {/* <XIcon/> */}
        </a>
      </div>
      </div>
      </div>
  );
}
