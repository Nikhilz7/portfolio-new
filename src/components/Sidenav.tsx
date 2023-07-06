import {useState} from 'react';
import {AiOutlineHome, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {GrProjects,GrTechnology} from 'react-icons/gr';

const Sidenav = () => {
    
    const [nav,setNav] =useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
    <div>
        <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" color="white"/>   
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg border-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}/>
                        <span className="pl-4">Home</span>
                    </a>
                    <a href="#skills" className="w-[75%] flex justify-center items-center rounded-full shadow-lg border-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrTechnology size={20}/>
                        <span className="pl-4">Skills</span>
                    </a>
                    <a href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg border-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20}/>
                        <span className="pl-4">Projects</span>
                    </a>
                    <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg border-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20}/>
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
                ): (
                    <div></div>
            )
        }
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className='flex flex-col'>
                <a href="#main" className="rounded-full shadow-md bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#skills" className="rounded-full shadow-md bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <GrTechnology size={20}/>
                </a>
                <a href="#projects" className="rounded-full shadow-md bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <GrProjects size={20}/>
                </a>
                <a href="#contact" className="rounded-full shadow-md bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail size={20}/>
                </a>
                
            </div>
        </div> 
    </div>
  )
}

export default Sidenav