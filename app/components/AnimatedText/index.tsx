"use client";
import React, {useEffect, useState} from "react";

interface AnimatedTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseBetweenTexts?: number;
}

const AnimatedText = ({texts, typingSpeed = 100, deletingSpeed = 50, pauseBetweenTexts = 1000}: AnimatedTextProps) => {
    const [displayText, setDisplayText] = useState(""); // Current displayed text
    const [textIndex, setTextIndex] = useState(0); // Index of the current text
    const [charIndex, setCharIndex] = useState(0); // Index of the current character
    const [isDeleting, setIsDeleting] = useState(false); // Whether text is being deleted

    useEffect(() => {
        const currentText = texts[textIndex];

        // Typing logic
        if (!isDeleting) {
            if (charIndex < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex + 1));
                    setCharIndex((prev) => prev + 1);
                }, typingSpeed);

                return () => clearTimeout(timeout); // Cleanup timeout
            } else {
                // Switch to deleting after typing is complete
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseBetweenTexts);

                return () => clearTimeout(timeout); // Cleanup timeout
            }
        } else {
            // Deleting logic
            if (charIndex > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex((prev) => prev - 1);
                }, deletingSpeed);

                return () => clearTimeout(timeout); // Cleanup timeout
            } else {
                // Switch to the next text after deleting is complete
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the first text
            }
        }
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseBetweenTexts]);

    return (
        <div style={styles.container}>
            <span>{displayText}</span>
            <span style={styles.cursor}>.</span>
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    cursor: {
        marginLeft: "0.1em",
        animation: "blink 1s steps(2, start) infinite",
    },
};

export default AnimatedText;