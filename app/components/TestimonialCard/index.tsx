import Image from "next/image";
import {Divider} from "primereact/divider";
import AnimatedContainer from "@/app/components/AnimatedContainer";

interface TestimonialCardProps {
    testimony: string;
    person: string;
    position: string;
}

export default function TestimonialCard({testimony, person, position}: TestimonialCardProps) {

    return (
        <AnimatedContainer>
            <div className="py-2 text-white/80">
                <div>
                    <Image src="/quote.svg" alt="quote" height={20} width={20}/>
                </div>
                <div>
                    <p className="text-sm ">{testimony}</p>
                </div>
                <Divider className="my-2 " type="dashed"/>
                <div>
                    <p className="text-white text-lg font-medium">{person}</p>
                    <p className="font-[300] -mt-1 opacity-50">{position}</p>
                </div>

            </div>
        </AnimatedContainer>
    )
}