import textLogo from '@/assets/images/TRAJECTORY__4_-removebg-preview.png';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      
    <nav className="flex gap-1 p-0.5 border border-violet-300/15 bg-neutral-400/10 backdrop-blur rounded-full">
      <a href="#" className="nav-item text-violet-900 hover:text-gray-600">Home</a>
      <a href="#"className="nav-item text-violet-900 hover:text-gray-600">Developers</a>
      <a href="#"className="nav-item text-violet-900 hover:text-gray-600">About</a>
      <a href="#"className="nav-item bg-white text-gray-900 hover:bg-violet-500/30 hover:text-gray-600">Get Started</a>
    </nav>
  </div>
  );
};