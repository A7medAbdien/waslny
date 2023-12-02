"use client";

import { headerFont } from '@/lib/fonts';
import { Driver } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedTextWord from '../animations/AnimatedTextWord';
import Link from 'next/link';
import MediaAppearanceAnimation from '../animations/MediaAppearanceAnimation';


type Props = {
    data: (Driver)[],
    hideImage?: Boolean,
    titleClassName?: string
}

const FoldedMenuDrivers = ({ data, hideImage = false, titleClassName }: Props) => {

    const [clicked, click] = useState<number | null>(null)
    const foldVariants = {
        show: { height: "auto", marginTop: "2.5rem" },
        hide: { height: 0, marginTop: "1rem" }
    }

    return (<>
        <div className="">
            <AnimatedTextWord
                delay={0.2}
                wordsSpacing="mr-[0.7rem]"
                height="h-[4.2rem] lg:h-[rem]"
                className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight mb-4`}
                text={"Select the driver.."} />
        </div>
        <ul id="ul" className="flex flex-col my-14 mx-5 max-h-[80%] 
        transition-all
        ">

            <motion.div
                className="border-[1px] w-full border-gray-700 rounded-full origin-left"
                initial={{
                    scaleX: 0
                }}
                whileInView={{
                    scaleX: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.6,
                }}
            />

            {data.map((driver, i) => (
                <React.Fragment key={i}>
                    <li
                        className={`flex flex-col justify-center items-center py-3 pb-0`}
                    >
                        <div className="overflow-hidden w-full">
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-row justify-between items-center w-full`}
                            >
                                <div className={`flex flex-row items-center  ${headerFont.className} text-4xl  capitalize primary-text-color font-extralight ${titleClassName}`}>
                                    {/* Image */}
                                    {!hideImage && <Image
                                        width={50}
                                        height={50}
                                        src={driver.img}
                                        alt={driver.name}
                                        className="rounded-full h-16 w-16 mr-3"
                                    />}

                                    {/* Title */}
                                    <div className="flex flex-col justify-center items-center">
                                        <div className={`${headerFont.className} text-4xl  capitalize primary-text-color font-light ${titleClassName}`}>
                                            {driver.name}
                                        </div>
                                        <div className="text-2xl capitalize primary-text-color font-light">
                                            <RatingStars rating={driver.rating} />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-4xl " onClick={() => clicked == i ? click(null) : click(i)}>
                                    <IoIosArrowDown className={`${clicked == i ? "rotate-180" : "rotate-0"} duration-500 transition-all`} />
                                </div>
                            </motion.div>
                        </div>

                        <div className='overflow-hidden w-full' >
                            <motion.div
                                className="flex flex-col items-start w-full"
                                variants={foldVariants}
                                animate={clicked == i ? 'show' : 'hide'}
                                initial={{ height: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut"
                                }}
                            >
                                <div className="lg:flex lg:flex-row lg:justify-between flex justify-center w-full">
                                    {/* {!hideImage && <div className="lg:w-[40%]">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={driver.img}
                                            alt={driver.name}
                                            className="rounded-e-full h-44 mb-10 w-[90%]"
                                        />
                                    </div>
                                    } */}
                                    <div className="flex flex-col items-center justify-center px-5 w-full">
                                        <div className=" text-xl">
                                            <b>Car:</b> {driver.car}
                                        </div>
                                        <div className=" text-xl">
                                            <b>Avg. Price / Trip:</b> {driver.priceTrip} BD
                                        </div>
                                        <div className=" text-xl">
                                            <b>Avg. Price / Month:</b> {driver.priceMonth} BD
                                        </div>



                                        <AnimatedTextWord
                                            delay={0.3}
                                            once={false}
                                            wordsSpacing={"mr-[0.2rem]"}
                                            className={`uppercase pr-2 font-bold tracking-tight hover:tracking-widest transition-all py-5`}
                                            text={">read more<"}
                                        />

                                        <MediaAppearanceAnimation delay={0.2} className="lg:pt-1 flex flex-row justify-center items-center pb-6">
                                            <Link href={`/successful`} >
                                                <button className={`${headerFont.className} group button-bg text-base  tracking-tight min-w-30 rounded-full py-4 px-8 uppercase truncate font-bold outline-none active:scale-105 transition`}>
                                                    <div className="flex flex-col justify-between items-start overflow-hidden h-5">
                                                        <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                                            Select
                                                        </div>
                                                        <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                                            Select
                                                        </div>
                                                    </div>
                                                </button>
                                            </Link>
                                        </MediaAppearanceAnimation>

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </li>
                    <motion.div
                        className="border-[1px] w-full border-gray-700 rounded-full origin-left"
                        initial={{
                            scaleX: 0
                        }}
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.6,
                        }}
                    />

                </React.Fragment>
            ))}
        </ul>
    </>)
}

export default FoldedMenuDrivers

interface RatingStarsProps {
    rating: number;
}

function RatingStars({ rating }: RatingStarsProps) {
    function getColorClassName(index: number) {
        if (index < rating) {
            return "text-yellow-300"; // Yellow color for filled stars
        } else {
            return "text-gray-300 dark:text-gray-500"; // Gray color for empty stars
        }
    }

    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 ms-1 ${getColorClassName(index)}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            ))}
        </div>
    );
}