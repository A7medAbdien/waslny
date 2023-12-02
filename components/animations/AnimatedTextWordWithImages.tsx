import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import MediaAppearanceAnimation from "./MediaAppearanceAnimation";

type Props = {
    text: string,
    imgs: (string | StaticImageData)[],
    className?: string,
    staggerChildren?: number,
    delayChildren?: number,
    delay?: number,
    height?: string;
    wordsSpacing?: string | number;
}

const AnimatedTextWordWithImages = ({ text, className, staggerChildren = 0.1, delayChildren = 0.1, delay = 0, height, wordsSpacing = "0.5rem", imgs }: Props) => {
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

    const temp = [...imgs]
    const getImage = () => {
        const i: string = temp.pop() as string

        return (
            <MediaAppearanceAnimation delay={0}>
                <Image
                    placeholder="blur"
                    src={i}
                    alt="quote"
                    width={100}
                    height={100}
                    className='inline-block rounded-full mx-3 h-[3.2rem] md:h-[4.5rem] w-[7rem] md:w-[10rem]'
                />
            </MediaAppearanceAnimation>
        )
    }

    return (
        <motion.div
            className={`flex-wrap ${className}`}
            style={{ display: "flex" }}
            variants={container}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
        >
            {
                words.map((word, i) => (
                    <span key={i}
                        className={`overflow-hidden ${height} flex justify-center items-center`}
                    >
                        <motion.span
                            variants={child}
                            style={{ marginRight: wordsSpacing }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            {(word == "-IMG-" && imgs.length > 0) ? getImage() : word}
                        </motion.span>
                    </span>
                ))
            }
        </motion.div >
    );
};

export default AnimatedTextWordWithImages;