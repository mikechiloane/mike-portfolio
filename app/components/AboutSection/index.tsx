import SectionTitle from "@/app/components/SectionTitle";
import PageSection from "@/app/components/PageSection";

export default function AboutSection() {

    return (
        <PageSection page="about">
            <div className="w-full mt-8 md:mt-0 about mb-8">

                <SectionTitle title="About"/>
                <div className="text-white/70 leading-normal">
                    <p>I’m a developer passionate about building reliable, scalable RESTful APIs and delivering seamless
                        digital solutions. With 5 years of experience in software development, I focus on crafting
                        backend
                        systems that prioritize performance, maintainability, and robust engineering practices.

                        <br/><br/> Currently, I’m part of the Production Support team at LexisNexis, where I manage and
                        maintain over 15 microservices across multiple tech stacks, supporting five complex products.
                        Alongside maintaining these systems, I contribute to feature development, ensuring our products
                        meet
                        user needs and deliver value to customers.

                        <br/><br/> I also have a strong frontend background, with 4 years of experience using JavaScript
                        frameworks like React, Next.js, and Angular. My skill set extends to DevOps, cloud computing on
                        AWS,
                        and Linux systems, allowing me to work seamlessly across the stack to deliver end-to-end
                        solutions.

                        <br/><br/> Previously, I worked at Convergence, a consulting company that exposed me to diverse
                        industries such as healthcare, banking, insurance, and telecommunications. This experience honed
                        my
                        ability to adapt to various business domains and deliver tailored software solutions.

                        <br/><br/> In my free time, you’ll often find me watching documentaries or setting off on solo
                        travel adventures to explore new places and cultures.</p>
                </div>
            </div>
        </PageSection>
    )
}