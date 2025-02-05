"use client";
import React, {useRef} from "react";
import {motion} from "framer-motion";
import {useInView} from "motion/react";

interface AnimatedContainerProps {
    children: React.ReactNode;
}


const AnimatedContainer: React.FC<AnimatedContainerProps> = ({children}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            animate={isInView ? {opacity: 1, x:0} : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            initial={{opacity: 0, x:20}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedContainer;