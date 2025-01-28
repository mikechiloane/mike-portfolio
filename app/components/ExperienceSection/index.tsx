"use client"
import SectionTitle from "@/app/components/SectionTitle";
import ExperienceCard from "@/app/components/ExperienceCard";
import {Timeline} from "primereact/timeline";
import PageSection from "@/app/components/PageSection";


const experienceData = [
    {
        year: "2023 Nov - Present",
        position: "Intermediate Java Developer",
        desc: "I was developing web based applications",
        stack: ["Java", "Springboot", "Spring", "MySQL", "MongoDb", "React", "Angular", "Javascript", "Python", "ElasticSearch", "AWS", "Azure", "Linux", "Azure Devops"]
    }, {
        year: "2023 Nov - Present",
        position: "Intermediate Java Developer",
        desc: "I was developing web based applications",
        stack: ["Java", "Springboot", "Spring", "MySQL"]
    },
    {
        year: "2023 Nov - Present",
        position: "Intermediate Java Developer",
        desc: "I was developing web based applications",
        stack: ["Java", "Springboot", "Spring", "MySQL"]
    }

]
export default function ExperienceSection() {

    return (
        <PageSection page="experience">
            <div className="w-full experience">
                <SectionTitle title="Experience"/>
                <div className="flex flex-col ">
                    <Timeline value={experienceData} content={ExperienceCard}/>
                </div>
            </div>
        </PageSection>
    )
}

