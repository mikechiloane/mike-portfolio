"use client";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "@/app/components/ProjectCard";
import PageSection from "@/app/components/PageSection";


const projectData = [
    {
        name: "Vehicle Tracker",
        desc: "This is the frontend application for the vehicle tracker project. It is a single page application that uses React.js and Redux for state management. The application is built using Webpack and Babel. The application is styled using tailwind css and custom CSS.",
        link: "https://github.com/mikechiloane/vehicle-tracker",
        imagePath: "/vehicle-tracker.jpeg",
        stack: ['Java', 'React', 'Springboot', 'MongoDB']
    },
    {
        name: "MailBlitz",
        desc: "Takes in curl request and breaks it down into nodes and persists it for future usage and can also define parameters and can ",
        link: "https://github.com/mikechiloane/mailblitz",
        imagePath: "/api.jpg",
        stack: ['Java', 'React', 'Springboot', 'MongoDB']

    },
    {
        name: "Student Management System",
        desc: "Spring Boot & Angular application that helps in managing students. It uses MySQL as the database and also has JWT authentication.",
        link: "https://github.com/mikechiloane/ezaga-stu-man-backend",
        imagePath: "/stu.jpeg",
        stack: ['Java', 'React', 'Springboot', 'MongoDB']

    }
]
export default function ProjectSection() {

    return (
        <PageSection page="project">
            <div id="#project" className="project mb-8">
                <SectionTitle title="Projects"/>

                <div className="flex flex-col space-y-8">
                    {
                        projectData.map((project, index) => <ProjectCard key={index} link={project.link}
                                                                         projectName={project.name}
                                                                         imagePath={project.imagePath}
                                                                         desc={project.desc} stack={project.stack}/>)
                    }
                </div>

            </div>
        </PageSection>
    )
}

