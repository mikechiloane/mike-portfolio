import StackTag from "@/app/components/StackTag";
import AnimatedContainer from "@/app/components/AnimatedContainer";


interface ExperienceCardProps {
    year: string;
    position: string;
    desc: string;
    stack: string[];
    company: string;
}

export default function ExperienceCard({year, company, position, desc, stack}: ExperienceCardProps) {


    return (
        <AnimatedContainer>
            <div className="text-white  mb-8">
                <div>
                    <div>
                        <p className="text-[.75rem] text-gray-500 font-[500]">{year}</p></div>
                    <div>
                        <p className="text text-slate-100">{company}</p>
                    </div>
                    <div className="">
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
        </AnimatedContainer>
    )
}

