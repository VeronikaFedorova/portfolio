import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from '@/components/ui/FloatingNav';
import { BiCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { LiaBuromobelexperte } from "react-icons/lia";

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={[
          {name: 'Home', link: './', icon: <FaHome />},
          {name: 'Skills', link: '#about', icon: <FiAlignCenter />},
          {name: 'Projects', link: '#projects', icon: <GoProjectRoadmap />},
          {name: 'Experience', link: '#experience', icon: <LiaBuromobelexperte />},
          {name: 'Approach', link: '#approach', icon: <BiCategory />}
        ]} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
