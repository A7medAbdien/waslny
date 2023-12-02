"use client";

import { headerFont } from '@/lib/fonts';
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { MainServicesData } from '@/lib/types';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { initialMainServicesData } from '@/lib/data';
import AnimatedTextWord from '@/components/animations/AnimatedTextWord';
import Link from 'next/link';


type SlideProps = Partial<MainServicesData[number]> & {
    initial?: boolean;
    duration?: number;
    className: string;
};

// this might result in a bug in case if a data not found it will show the initialCarouselGrabbableData
const ServicesSlide = (
    {
        title = initialMainServicesData.title,
        description = initialMainServicesData.description,
        img = initialMainServicesData.img,
        url = initialMainServicesData.url,
        initial,
        duration = 0.3,
        className
    }: SlideProps) => {

    const [hovered, hover] = useState(false)
    const variants = {
        show: { y: "-100%" },
        hide: { y: 0 }
    };

    return (
        <div
            className={className}
            onMouseOut={() => hover(false)}
        >
            <Link href={url}>
                {!initial ?
                    <div className="w-full h-full">
                        <Image
                            width={400}
                            height={400}
                            onMouseEnter={() => hover(true)}
                            src={img}
                            alt={title}
                            className="w-full h-full"
                        />
                    </div>
                    :
                    <div
                        onMouseOver={() => hover(true)}
                        className="w-full h-full secondary-bg"
                    >
                        <SlideContent
                            once
                            title="White Card"
                            description={
                                <BsArrowRight className="text-5xl text-gray-700 transition-all" />
                            }
                        />
                    </div>
                }

                <motion.div
                    onMouseOver={() => hover(true)}
                    className="relative w-full h-full primary-bg"
                    variants={variants}
                    animate={hovered ? "show" : "hide"}
                    transition={{ ease: "easeOut", duration }}
                >
                    <SlideContent title={title} description={description} containerDuration={duration - 0.1} />
                </motion.div>
            </Link>
        </div>
    )
}

type SlideContentProps = {
    once?: boolean;
    title: string;
    description: string | React.ReactNode;
    containerDuration?: number;
}

const SlideContent = ({ title, description, once = false, containerDuration }: SlideContentProps) => {
    return (
        <div className="flex flex-col justify-center items-center
                            w-full h-full text-center">

            <AnimatedTextWord
                delay={containerDuration}
                wordsSpacing={"mr-[0.2rem]"}
                className={`p-4 ${headerFont.className} capitalize text-2xl md:text-3xl lg:text-5xl font-light tracking-tight`}
                text={title}
                once={false}
            />

            <motion.div
                className="border-[1px] w-7 lg:w-14 border-gray-700 rounded-full relative origin-left"
                initial={{
                    scaleX: 0
                }}
                whileInView={{
                    scaleX: 1,
                }}
                viewport={once ? { once: true } : undefined}
                transition={{
                    ease: "easeOut",
                    duration: 0.5,
                    delay: containerDuration
                }}
            />

            {(typeof description === "string" || description instanceof String) ?
                <AnimatedTextWord
                    delay={0.3}
                    staggerChildren={0.05}
                    delayChildren={0.05}
                    wordsSpacing={"mr-[0.2rem]"}
                    className="px-10 py-5 justify-center"
                    text={description as string}
                    once={false}
                />
                :
                <div className="overflow-hidden">
                    <motion.h4
                        className="px-10 py-5"
                        initial={{
                            y: "100%", opacity: 0
                        }}
                        whileInView={{
                            y: 0, opacity: 1
                        }}
                        viewport={once ? { once: true } : undefined}
                        transition={{
                            ease: "easeOut",
                            duration: 0.3,
                            delay: containerDuration
                        }}
                    >
                        {description}
                    </motion.h4>
                </div>
            }
        </div>
    )
}

export default ServicesSlide;
