"use client"
import SectionTitle from "@/app/components/SectionTitle";
import ExperienceCard from "@/app/components/ExperienceCard";
import {Timeline} from "primereact/timeline";
import PageSection from "@/app/components/PageSection";


const experienceData = [
    {
        year: "2023 Nov - Present | Lexis Nexis (RELX Group)",
        position: "Intermediate Java Developer",
        desc: "Building and maintaining high-performance, scalable systems to handle large volumes of legal and business data",
        stack: ["Java", "Springboot", "Kafka", "Spring","Hibernate","JPA", "MySQL", "MongoDb", "React", "Angular", "Extensions", "Typescript","Node", "Javascript", "Python", "ElasticSearch","CI/CD", "Docker","Kubernetes","Radis","Datadog", "AWS", "Azure", "Linux", "Azure Devops","DuckDB","Parquet","ETL"]
    }, {
        year: "2022 Feb- 2023 Nov | Convergenc3",
        position: "Java Developer ",
        desc: "Solved complex technical challenges for clients in industries such as healthcare, finance, e-commerce, and more.",
        stack: ["Java", "Quarkus", "Springboot", "JWT", "Spring","REST", "Fast API","Javascript","Hibernate","JPA","Android","Flutter", "Nginx", "RapidAPI", "Selenium", "Jsp", "Node", "GCP", "Kafka","React Native", "MySQL", "MongoDb", "React", "Angular", "Javascript", "Python", "AWS", "Linux", "Salesforce", "Apex"]
    },
    {
        year: "2019 Jan - 2022 Jan | Maphori Express",
        position: "App Developer",
        desc: "Developed and maintained tenant management application",
        stack: ["PHP", "JAVA", "Bootstrap", "MySQL","MongoDB","React","Firebase","Flutter","NodeJs","Springboot","Javascript"]
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

