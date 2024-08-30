import Logo from "@/assets/images/TRAJECTORY__4_-removebg-preview.png";
import Image from "next/image";


export const HeadComp = () => {
  return (
    <header className=" top-0 bg-gradient-to-br from-slate-50 via-violet-100 to-slate-50  backdrop-blur-sm z-20">
    <div className="flex justify-center items-center py-1 bg-black text-white gap-3">
      <p className="text-white/60 hidden md:block">Explore the Web, One Byte at a Time</p>
      <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          
      </div>
    </div>
    <div className="">
    <div>
      <div className="container">
      <div className="flex items-center justify-between ">
        <Image src={Logo} alt="Saas Logo" height={120} width={120}/> 
        
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">Developers</a>
          <button className="bg-black text-white px-4 py-1 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">More</button>
        
        </nav>
      </div>
      </div>
    </div>
    </div>
    </header>
  );
};