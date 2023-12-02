import { motion } from "framer-motion";


type Props = {
    text: string,
    className?: string,
    staggerChildren?: number,
    delayChildren?: number
    delay?: number;
    height?: string
}

const AnimatedTextCharacter = ({ text, className, delay = 0, staggerChildren = 0.03, delayChildren = 0.1, height = "h-[4.5rem]" }: Props) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { delay, staggerChildren: staggerChildren, delayChildren: delayChildren * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: "0%"

        },
        hidden: {
            opacity: 0,
            y: "100%"

        },
    };

    return (
        <motion.div
            className={`flex-wrap flex justify-start items-start ${className}`}
            style={{ overflow: "hidden", display: "flex" }}
            variants={container}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
        >
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`overflow-hidden ${height} flex`}
                >
                    <motion.span
                        variants={child}
                        transition={{ ease: "easeOut" }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;