"use client";
import {motion} from "framer-motion";
import Intro from "@/app/components/Intro";
import {Poppins} from 'next/font/google';
import EducationSection from "@/app/components/EducationSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectSection from "@/app/components/ProjectSection";
import TestimonialSection from "@/app/components/TestimonialSection";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'], // Optional weights
});
export default function Home() {
    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1.5}}
                    className={`${poppins.className} px-3 md:px-8 `}>
            <main className="w-full flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px]">
                    <div className="md:sticky md:top-8 md:self-start px-0 md:px-8">
                        <Intro/>
                    </div>
                    <div className="overflow-hidden px-0 md:px-8">
                        <AboutSection/>
                        <ExperienceSection/>
                        <EducationSection/>
                        <ProjectSection/>
                        <TestimonialSection/>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
