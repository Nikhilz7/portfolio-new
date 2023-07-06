import { BsLinkedin } from "react-icons/bs";
import {CgMail} from "react-icons/cg"
import {MdContactPage} from "react-icons/md"
import {FaGithubSquare} from "react-icons/fa"


const Contact = () => {
    const mail:string =import.meta.env.VITE_MAIL;
    const linkedin:string =import.meta.env.VITE_LINKEDIN;
    const github:string =import.meta.env.VITE_GITHUB;
    const resume:string =import.meta.env.VITE_RESUME;

    return (
        <div id="contact" className="">

    <div className="relative w-[600] h-screen bg-gradient-to-tr from-indigo-800 via-neutral-900 to-indigo-900 flex flex-row justify-center ">
        <div className="max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-6xl text-4xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent ">Connect with Me</h1>
                <p className="mt-6 sm:text-2xl font-display bg-neutral-200 bg-clip-text text-transparent">As a passionate web developer, I thrive on creating exceptional online experiences that captivate and engage users.Whether you need a stunning website, a dynamic web application, or assistance with any aspect of web development. My expertise includes front-end development, back-end programming, responsive design, and more. I am committed to delivering high-quality, visually appealing, and user-friendly solutions tailored to your unique requirements.</p>

            <div className="flex flex-row justify-between pt-6 ">
                <span onClick={()=>window.open(linkedin,'_blank')?.focus()} className="flex items-center m-3 hover:cursor-pointer">
                    <BsLinkedin color="white" size={50}/>
                    <p className="sm:text-2xl text-md font-display font-bold bg-neutral-200 bg-clip-text text-transparent">LinkedIn</p>
                </span>
                <span  onClick={()=>window.open('mailto:'+mail,'_blank')?.focus()}  className="flex items-center m-3 hover:cursor-pointer">
                    <CgMail color="white" size={50}/>
                    <p className="sm:text-2xl text-md font-display font-bold bg-neutral-200 bg-clip-text text-transparent">Mail</p>
                </span>
                <span onClick={()=>window.open(github,'_blank')?.focus()} className="flex items-center m-3 hover:cursor-pointer">
                    <FaGithubSquare color="white" size={50}/>
                    <p className="sm:text-2xl text-md font-display font-bold bg-neutral-200 bg-clip-text text-transparent">Github</p>
                </span>
                <span onClick={()=>window.open(resume,'_blank')?.focus()} className="flex items-center m-3 hover:cursor-pointer">
                    <MdContactPage color="white" size={50}/>
                    <p className="sm:text-2xl text-md font-display font-bold bg-neutral-200 bg-clip-text text-transparent">Resume</p>
                </span>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Contact;