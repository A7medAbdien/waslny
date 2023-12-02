"use client";

import { headerFont } from '@/lib/fonts';
import { useState } from "react";
import { motion } from 'framer-motion';
import { BlogsSectionData } from '@/lib/types';
import Image from 'next/image';
// import { BsArrowRight } from 'react-icons/bs';
import { NFImage, NFLink } from '@/lib/data';
import BasicAppearanceAnimation from '@/components/animations/BasicAppearanceAnimation';
import Link from 'next/link';
import AnimatedTextWord from '@/components/animations/AnimatedTextWord';


type SlideProps = Partial<BlogsSectionData[number]> & {
    className: string;
};

// this might result in a bug in case if a data not found it will show the initialCarouselGrabbableData
const BlogsSlide = (
    {
        title,
        img = NFImage,
        link = NFLink,
        date,
        author,
        className
    }: SlideProps) => {

    const [hovered, hover] = useState(false)


    return (
        <div
            className={className}
            onMouseEnter={() => hover(true)}
            onMouseLeave={() => hover(false)}
        >

            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="w-full h-[55%] rounded-t-full overflow-hidden">
                    <Image
                        width={400}
                        height={400}
                        src={img}
                        alt={title!}
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full h-[45%]">
                    <SlideContent
                        title={title}
                        date={date}
                        author={author}
                        link={link}
                        hovered={hovered}
                    />
                </div>
            </div>
        </div >
    )
}

type SlideContentProps = Partial<BlogsSectionData[number]> & {
    hovered?: boolean;
}

const SlideContent = ({ title, date, author, link, hovered }: SlideContentProps) => {

    const initArrowVariants = {
        show: { x: "-100%" },
        hide: { x: "110%" }
    };
    const arrowVariants = {
        show: { x: 0 },
        hide: { x: "-200%" }
    };

    return (
        <div className="flex flex-col justify-center items-start w-full h-full text-start gap-1">

            <AnimatedTextWord
                wordsSpacing={"mr-[0.2rem]"}
                className="pt-4 uppercase font-medium text-sm tracking-tight text-gray-400"
                text={date + " - " + author}
            />


            <AnimatedTextWord
                wordsSpacing={"mr-[0.2rem]"}
                className={`pb-4 ${headerFont.className} capitalize text-2xl md:text-2xl font-light tracking-tighter`}
                text={title!}
            />

            <div>
                <Link
                    target="_blank"
                    href={link!}
                >
                    <div className="group uppercase font-light flex flex-row items-center">

                        <AnimatedTextWord
                            wordsSpacing={"mr-[0.2rem]"}
                            className={`pr-2 tracking-tight group-hover:tracking-widest group-hover:font-semibold transition-all`}
                            text={"read more"}
                        />

                        <BasicAppearanceAnimation>
                            <div className='flex w-10 overflow-hidden'>

                                <motion.div
                                    initial={{ x: 50 }}
                                    animate={hovered ? 'show' : 'hide'}
                                    variants={arrowVariants}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    {/* <BsArrowRight className="text-4xl text-gray-700 relative" /> */}
                                </motion.div>
                                <motion.div
                                    initial={{ x: 0 }}
                                    animate={!hovered ? 'show' : 'hide'}
                                    variants={initArrowVariants}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    {/* <BsArrowRight className="text-4xl text-gray-400" /> */}

                                </motion.div>
                            </div>
                        </BasicAppearanceAnimation>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default BlogsSlide;