"use client"
import SectionTitle from "@/app/components/SectionTitle";
import {Timeline} from "primereact/timeline";
import EducationCard from "@/app/components/EducationCard";
import PageSection from "@/app/components/PageSection";


interface EducationCardProps {
    school: string,
    qualification: string,
    year: string
}


const educationData: { school: string, qualification: string, year: string }[] = [
    {
        qualification: "Bsc Degree, Computer Science",
        school: "Universtity of Limpopo",
        year: "2018 - 2022"
    },
    {
        qualification: "National Senior Certificate",
        school: "Sekwai Secondary School",
        year: "2013 - 2017"
    },
    {
        qualification: "Intermediate Phase",
        school: "LL Mogane Primary",
        year: "2006 - 2012"
    }
]
export default function EducationSection() {


    return (
        <PageSection page="education">

            <div className="w-full education">
                <SectionTitle title="Education"/>

                <div className="">
                    <Timeline align="left" value={educationData} content={EducationCard}/>
                </div>

            </div>
        </PageSection>
    )
}