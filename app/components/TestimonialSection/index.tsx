import TestimonialCard from "@/app/components/TestimonialCard";
import SectionTitle from "@/app/components/SectionTitle";
import PageSection from "@/app/components/PageSection";

const testimonials = [
    {
        person: "John Smith",
        position: "Senior Engineer at LexisNexis",
        testimony: "Irene consistently delivers high-quality, reliable RESTful APIs and is a key contributor to our team's success."
    },
    {
        person: "Sarah Jones",
        position: "Project Manager at Convergence",
        testimony: "Irene’s problem-solving skills and expertise in Java helped us meet tight deadlines on critical projects."
    }
];

export default function TestimonialSection() {

    return (
        <PageSection page="testimonials">
            <div className="testimonials">
                <SectionTitle title="Testimonials"/>
                <div className="flex flex-col space-y-2 items-center justify-center">
                    {testimonials.map((testimony, index) => <TestimonialCard key={index} person={testimony.person}
                                                                             testimony={testimony.testimony}
                                                                             position={testimony.position}/>)}
                </div>
            </div>
        </PageSection>
    )
}