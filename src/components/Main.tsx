import {TypeAnimation} from 'react-type-animation';
import {FaLinkedinIn} from'react-icons/fa';
import {BsGithub} from'react-icons/bs';
import {CgMail} from'react-icons/cg';
import Button from './Button.component';

const Main = () => {
    const Resume =import.meta.env.VITE_RESUME;
    const imgUrl = new URL('../assets/background.png', import.meta.url).href;
    const mail:string =import.meta.env.VITE_MAIL;
    const linkedin:string =import.meta.env.VITE_LINKEDIN;
    const github:string =import.meta.env.VITE_GITHUB;

  return (
    <div id="main">
        
        <div className="relative w-full h-screen bg-gradient-to-br from-stone-900 via-neutral-900 to-indigo-900">

            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-start">
                <img src= {imgUrl} className="" />
                <h1 className="sm:text-6xl text-4xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent">I'm Nikhil</h1>
                {/* <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-Fuchsia-950 to-indigo-600">I'm Nikhil</h1> */}
                <h2 className="flex sm:text-4xl text-2xl pt-4 font-display font-bold  bg-neutral-200 bg-clip-text text-transparent">I'm a&nbsp;

                    <TypeAnimation
                    sequence={[
                            'Fullstack Developer',
                            2000,
                            'Coder',
                            2000,
                            'Tech Enthusiast',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <div className="pt-4">
                <Button value='Get my resume' disabled={false} link={Resume}/>
                </div>
                <div className="flex flex-row justify-between pt-6 max-w-[200px] w-full">
                    <FaLinkedinIn onClick={()=>window.open(linkedin,'_blank')?.focus()} color="white" size={20} className="cursor-pointer" />
                    <BsGithub onClick={()=>window.open(github,'_blank')?.focus()} color="white" size={20} className="cursor-pointer" />
                    <CgMail onClick={()=>window.open('mailto:'+mail,'_blank')?.focus()} color="white" size={20} className="cursor-pointer" />

                </div>
            </div>
        </div>

    </div>
  )
}
191830
export default Main