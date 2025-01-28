import StackTag from "@/app/components/StackTag";


interface ExperienceCardProps {
    year: string;
    position: string;
    desc: string;
    stack: string[];
}

export default function ExperienceCard({year, position, desc, stack}: ExperienceCardProps) {


    return (
        <div className="text-white  mb-8">
            <div>
                <div>
                    <p className="text-[.75rem] text-gray-500 font-[500]">{year}</p></div>
                <div className="mt-1">
                    <p>{position}</p>
                </div>
                <div className="mt-2">
                    <p className="text-[.9rem] text-gray-300 font-[300]">
                        {desc}</p>
                </div>
                <div className="py-2 flex gap-2 flex-wrap ">
                    {
                        stack.map((s, index) => <StackTag key={index} stack={s}/>)
                    }
                </div>
            </div>
        </div>
    )
}

