import AnimatedContainer from "@/app/components/AnimatedContainer";

interface EducationCardProps {
    school: string,
    qualification: string,
    year: string
}


const EducationCard = (props: EducationCardProps) => {


    return (
        <AnimatedContainer>
            <div className="text-white/80 mb-8">
                <div>
                    <p className="text-md text-white font-[400]">{props.qualification}</p>
                    <p className="text-sm  text-white/60">{props.school}</p>
                </div>
                <div>
                    <p className="text-sm text-teal-300 font-bold">{props.year}</p>
                </div>

            </div>
        </AnimatedContainer>
    )
}

export default EducationCard;