"use client";

import { headerFont } from '@/lib/fonts';
import { Faq, Service } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedTextWord from '../animations/AnimatedTextWord';
import Link from 'next/link';


type Props = {
    data: (Service | Faq)[],
    hideImage?: Boolean,
    titleClassName?: string
}

const FoldedMenu = ({ data, hideImage = false, titleClassName }: Props) => {

    const [clicked, click] = useState<number | null>(null)
    const foldVariants = {
        show: { height: "auto", marginTop: "2.5rem" },
        hide: { height: 0, marginTop: "1rem" }
    }

    return (
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

            {data.map((service, i) => (
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
                                className={`flex flex-row justify-center lg:justify-between items-center w-full`}
                            >
                                <div className={`flex flex-row  items-center  ${headerFont.className} text-4xl  capitalize primary-text-color font-extralight ${titleClassName}`}>
                                    {/* Image */}
                                    {!hideImage && <Image
                                        width={50}
                                        height={50}
                                        src={(service as Service).img}
                                        alt={service.title}
                                        className="rounded-full h-16 w-16 mr-3"
                                    />}

                                    {/* Title */}
                                    {service.title}
                                </div>

                                <div className="text-4xl" onClick={() => clicked == i ? click(null) : click(i)}>
                                    <IoIosArrowDown className={`${clicked == i ? "rotate-180" : "rotate-0"} duration-500 transition-all`} />
                                </div>
                            </motion.div>
                        </div>

                        {/* Inner part */}
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
                                <div className="lg:flex lg:flex-row lg:justify-between justify-center lg:w-full">
                                    {!hideImage && <div className="lg:w-[40%]">
                                        <Image
                                            width={300}
                                            height={300}
                                            src={(service as Service).img}
                                            alt={service.title}
                                            className="rounded-e-full h-44 mb-10 w-[90%]"
                                        />
                                    </div>
                                    }
                                    <div className="flex flex-col items-center justify-center px-10">
                                        <p className='mb-5'>
                                            {service.description}
                                        </p>


                                        {(service as Service).url && <Link href={(service as Service).url}>
                                            <AnimatedTextWord
                                                delay={0.3}
                                                once={false}
                                                wordsSpacing={"mr-[0.2rem]"}
                                                className={`uppercase pr-2 font-bold tracking-tight hover:tracking-widest transition-all pb-5`}
                                                text={">read more<"}
                                            />
                                        </Link>}

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
    )
}

export default FoldedMenu