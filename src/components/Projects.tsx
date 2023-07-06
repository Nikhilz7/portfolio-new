import Button from "./Button.component"
import {projects} from '../../projects.ts';


const Projects = () => {
    // Image, Heading, description, LivelinkButton, Githublink;



    return (
    //   <div id='projects' className="relative w-[600] h-full bg-gradient-to-br from-indigo-800 via-neutral-900 to-indigo-900 flex flex-col-reverse justify-center ">
    //       <div className="max-w-screen m-20 p-20 h-full w-full flex flex-col  lg:items-center items-center">
    //           <h1 className="sm:text-6xl text-4xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent mb-6">Projects</h1>
    
    <div id="projects" className="relative w-[600] h-full bg-gradient-to-br from-indigo-800 via-neutral-900 to-indigo-900 flex flex-row justify-center ">
        <div className="sm:max-w-[1700px] max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-start sm:ml-28">
            <h1 className="sm:text-6xl text-4xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent sm:ml-[700px] mb-6">Projects</h1>
            
                {projects.map((project)=>(
              <div className="sm:items-center flex sm:flex-row flex-col p-2 m-6">
                <div className="sm:w-full sm:min-h-[300px] bg-blend-lighten md:bg-blend-darken shadow-[0px_0px_30px_white] hover:scale-110 ease-in duration-200 rounded-3xl   ">

                        <img src={project.image} alt="" className=" sm:w-[1200px] sm:h-[400px] object-fill  rounded-3xl sm:opacity-90 hover:opacity-100"/>
                    </div>  
                <div className="w-full max-w-5xl relative pl-16 flex flex-col ">
                    <div className="pt-4 font-display bg-neutral-200 bg-clip-text text-transparent">
                        <h3 className="sm:text-4xl text-2xl text-transparent  text-neutral-100">
                            {project.name}
                        </h3>
                        <p className="sm:text-2xl text-sm pt-8">Made with: {project.tech}</p>
                        <p className="sm:text-lg text-m p-3">{project.description}</p>
                        <Button value="Live" disabled={false} link={project.live_link as string}/>
                        <Button value="Github" disabled={false} link={project.github_link}/>
                        </div>
                    </div>   
                </div>
                ))}
                </div>
      </div>
    )
  }
  
  export default Projects