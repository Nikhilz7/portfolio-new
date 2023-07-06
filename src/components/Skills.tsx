import Button from "./Button.component";


const Skills = () => {
    const FrontEnd: string[] = ['HTML','JavaScript','TypeScript','React','Redux','Nextjs'];
    const BackEnd: string[] = ['Nodejs','ExpressJs','SQL- mysql', 'NoSQL- mongoDB','firebase'];
    const Stying: string[] = ['css3','sass','mui','figma','tailwindcss','styled-components'];
    const Miscellaneous: string[] = ['Git', 'GitHub', 'aws','postman','Agile'];

    return (
        <div id="skills" className="">

    <div className="relative w-[600] h-screen bg-gradient-to-tr from-indigo-800 via-neutral-900 to-indigo-900 flex flex-row justify-center ">
        <div className="max-w-[900px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-6xl text-4xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent ">Skills</h1>
            <div className="pt-4">
                <h2 className="sm:text-3xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent">FrontEnd</h2>
                    <div
                        className="pt-2"
                        >
                        {FrontEnd.map((value)=>(
                                <Button key={value} value={value} disabled />
                        ))}
                    </div>
            </div>
            <div className="pt-4">
                <h2 className="sm:text-3xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent">Styling & design</h2>
                    <div
                        className="pt-2"
                    >
                        {Stying.map((value)=>(
                                <Button key={value} value={value} disabled />
                        ))}
                    </div>
            </div>
            <div className="pt-4">
                <h2 className="sm:text-3xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent">BackEnd</h2>
                    <div
                        className="pt-2"
                    >
                        {BackEnd.map((value)=>(
                                <Button key={value} value={value} disabled/>
                        ))}
                    </div>
            </div>
            <div className="pt-4">
                <h2 className="sm:text-3xl font-display font-bold bg-neutral-200 bg-clip-text text-transparent">Miscellaneous</h2>
                    <div
                        className="pt-2"
                    >
                        {Miscellaneous.map((value)=>(
                                <Button key={value} value={value} disabled/>
                        ))}
                    </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Skills;