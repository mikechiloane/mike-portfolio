"use client";
import {ReactNode} from "react";
import {useInView} from "react-intersection-observer";
import {activateSectionRef} from "@/app/utils/introUtils";

interface PageSectionProps {
    page: string;
    children: ReactNode;
}

export default function PageSection({page, children}: PageSectionProps) {

    const {ref, inView} = useInView({
        threshold: 0.4,
        triggerOnce: false
    });

    if (inView) {
        activateSectionRef(page);
    }


    return (
        <div ref={ref} id={page}>
            {children}
        </div>
    )
}