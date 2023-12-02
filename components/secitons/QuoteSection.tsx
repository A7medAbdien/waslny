"use client";

import { headerFont } from '@/lib/fonts';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import { motion } from 'framer-motion';
import AnimatedTextWordWithImages from '../animations/AnimatedTextWordWithImages';
import { quoteSectionData } from '@/lib/data';



type Props = typeof quoteSectionData

const QuoteSection = ({ quote, imgs, someone }: Props) => {
    return (
        <div className='w-full min-h-[80vh] flex flex-col items-center justify-center mt-12 lg:mt-20'>


            <AnimatedTextWordWithImages
                staggerChildren={0.05}
                height="h-[4.5rem] lg:h-[6rem]"
                wordsSpacing={"0.5rem"}
                className={`w-full mx-5 md:mx-0 lg:w-3/4
                ${headerFont.className} capitalize text-5xl lg:text-7xl font-light !leading-[4rem] md:!leading-[5rem] lg:!leading-[6rem] tracking-tighter justify-center`}
                text={quote}
                imgs={imgs}
            />

            <motion.div
                className="border pt-8 my-10 md:pt-10 border-gray-700 rounded-full relative origin-top"
                initial={{
                    scaleY: 0
                }}
                whileInView={{
                    scaleY: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.6,
                    delay: 1
                }}
            />

            <h4 className={"uppercase font-medium tracking-tight muted-text-color"}>
                <BasicAppearanceAnimation delay={1.2}>
                    {someone}
                </BasicAppearanceAnimation>
            </h4>
        </div >
    )
}

export default QuoteSection