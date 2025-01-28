import StackTag from "@/app/components/StackTag";
import Image from "next/image";

interface ProjectCardProps{
    link:string;
    projectName:string;
    imagePath:string;
    desc:string;
    stack:string[];
}


export default function ProjectCard({projectName,desc,stack,imagePath,link}:ProjectCardProps){

    return (
        <div className="w-full text-white">
            <div>
                <p className="font-[500]  text-[1.05rem]">{projectName}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm leading-normal text-white/80">{desc}</p>
            </div>
            <div className="w-[200px] h-[100px] relative mt-3">
                <Image src={imagePath} fill={true} alt="stack image"/>
            </div>
            <div className="flex gap-2 flex-wrap mt-3">
                {
                    stack.map((stck, index)=>
                        <StackTag stack={stck} key={index}/>
                    )
                }

            </div>
        </div>
    )
}