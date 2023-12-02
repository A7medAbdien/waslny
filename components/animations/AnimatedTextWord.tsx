"use client";

import { motion } from "framer-motion";

type Props = {
    text: string,
    className?: string,
    staggerChildren?: number,
    delayChildren?: number,
    delay?: number,
    height?: string;
    wordsSpacing?: string;
    once?: boolean;
}

const AnimatedTextWord = ({ text, className, staggerChildren = 0.1, delayChildren = 0.1, delay = 0, height, wordsSpacing = "mr-[0.5rem]", once = true }: Props) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerChildren, delayChildren: delay + delayChildren * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: "0%",
        },
        hidden: {
            opacity: 0,
            y: "100%",
        },
    };

    return (
        <motion.div
            className={`flex-wrap ${className}`}
            style={{ display: "flex" }}
            variants={container}
            viewport={once ? { once: true } : undefined}
            initial="hidden"
            whileInView="visible"
        >
            {
                words.map((word, index) => (
                    <span key={index}
                        className={`overflow-hidden ${height} flex`}
                    >
                        <motion.span
                            className={`${wordsSpacing}`}
                            variants={child}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))
            }
        </motion.div >
    );
};

export default AnimatedTextWord;