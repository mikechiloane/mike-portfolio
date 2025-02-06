"use client"
import SocialStack from "@/app/components/SocialStack";
import ScrollRef from "@/app/components/ScrollRef";
import Image from "next/image";
import AnimatedContainer from "@/app/components/AnimatedContainer";


const socialLinks = [
    {
        link: "https://www.github.com/mikechiloane",
        imagePath: "/github.svg"
    },
    {
        link: "https://www.linkedin.com/in/mikechiloane",
        imagePath: "/linkedin.svg"
    }
];


const scrollReferences = [
    'about', 'experience', 'education', 'project', 'testimonials'
]


const Intro = () => {

    return (
        <AnimatedContainer>
            <div className={` w-full text-white `}>
                <div className="">
                    <p className="text-[2.2rem]  md:text-[3.5rem] leading-[60px] text-start font-medium">Mike
                        Chiloane</p>
                    <p className="text-xl md:text-2xl font-[400]">Intermediate Java Developer</p>
                    <p className="text-[.94rem] mt-4 font-[200] text-white/80 md:max-w-[400px]">A proficient Java
                        Software
                        Engineer,
                        leveraging
                        industry best practices to transform innovative ideas into robust and scalable software
                        solutions.</p>
                    <div className="flex space-x-4 mt-4">
                        {
                            socialLinks.map((link, index) => <SocialStack key={index} imagePath={link.imagePath}
                                                                          link={link.link}/>)
                        }
                    </div>

                    <div className="mt-8 flex justify-start">
                        <a href="/attachments/cv.doc" download="mike_cv.doc">
                            <button
                                className="bg-teal-400/20 rounded-full px-4 py-1 text-[1rem] items-center text-teal-300 font-[400] flex gap-2">
                                <p>Download
                                    CV</p><Image src="/download.svg" height={15} width={15} alt="download cv"/>
                            </button>
                        </a>
                    </div>

                    <div className="mt-16 flex flex-col space-y-5">
                        {
                            scrollReferences.map((ref, index) => <ScrollRef key={index} ref={ref}/>)
                        }
                    </div>
                </div>

            </div>
        </AnimatedContainer>
    )
}


export default Intro;