"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ServicesListHeaderData, services } from '@/lib/data/services';
import { headerFont } from '@/lib/fonts';
import { Service } from '@/lib/types';
import ServicesSlide from './carousels/slides/ServicesSlide';
import CarouselGrabbable from './carousels/CarouselGrabbable';
import AnimatedTextWord from './animations/AnimatedTextWord';
import BasicAppearanceAnimation from './animations/BasicAppearanceAnimation';
import clsx from 'clsx';
import { IoIosArrowDown } from 'react-icons/io';


const ServicesList = (service: Service) => {
    const ref = useRef<HTMLDivElement>(null)

    return (<div className='flex flex-col overflow-hidden mb-20'>

        {/* Title */}
        <div className={`${headerFont.className} flex flex-col justify-center items-center text-center px-5 lg:px-0`}>
            <AnimatedTextWord
                delay={0.5}
                className={"uppercase font-light tracking-widest text-5xl"}
                text={service.title}
            />
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center items-center text-center mb-10 px-5 lg:px-0">
            <AnimatedTextWord
                delay={0.5}
                className={"text-xl muted-text-color justify-center"}
                text={service.description}
            />
        </div>

        {/* Carousel - small screens */}
        {service.subServices && <CarouselGrabbable
            ref={ref}
            GrabbableId={"MainServicesCarouselGrabbable"}
            meta={service.subServices}
            className="lg:hidden flex h-full flex-nowrap gap-7 overflow-x-auto hideScrollBar -ml-36 pl-36" //to show the rest of slide 
        >
            <Slide title={''} description={''} img={''} url={''} id={''} />
        </CarouselGrabbable>}

        {/* List - large screens */}
        {service.subServices && <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5'
        >
            {service.subServices.map((subService, i) => (
                <div key={i}>
                    <Slide {...subService} />
                </div>
            ))}
        </motion.div >}

    </div>)
}

const Slide = (service: Service) => (
    <div
        className='flex flex-col justify-center items-center text-center'
    >
        <ServicesSlide
            {...service}
            className=" w-[20rem] h-[30rem] xl:max-h-[50rem] rounded-full border-2 border-gray-700 overflow-hidden"
        />

        <div
            className={`my-5 mb-10 ${headerFont.className} font-extralight text-4xl`}
        >
            {service.title}
        </div>
    </div>
);

export const ServicesListHeader = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center mb-24 -mt-14 px-5 lg:px-0'>
            <AnimatedTextWord
                height='h-[5.2rem]'
                wordsSpacing='mr-7'
                className={`${headerFont.className} text-6xl lg:text-7xl font-extralight tracking-tighter`}
                text={ServicesListHeaderData.headerTitle}
            />

            <div className="flex items-center justify-end">
                <AnimatedTextWord
                    delay={0.5}
                    className={"uppercase font-medium tracking-widest text muted-text-color"}
                    text={ServicesListHeaderData.searchMutedText}
                />
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-[16rem] h-[3rem] relative">
                    <CategoryMenu />
                </motion.div>
            </div>

        </div >
    )
}

const CategoryMenu = () => {
    const [clicked, click] = useState<boolean>(false)
    const foldVariants = {
        show: { height: "auto" },
        hide: { height: "3rem" }
    }
    return (
        <motion.div
            onClick={() => click(!clicked)}
            className={clsx(`absolute select-none cursor-pointer right-0 border-[3px] SocialMediaLinks-border-color primary-bg rounded-[1.3rem] w-[16rem] text-xl
            flex flex-col justify-start items-start px-5
            overflow-hidden max-lg:max-h-36`,
                { "max-lg:overflow-auto": clicked })}
            variants={foldVariants}
            animate={clicked ? 'show' : 'hide'}
            initial={{ height: "3rem" }}
            transition={{
                duration: 0.7,
                ease: "circOut"
            }}
        >

            <div
                className="w-full h-full py-2 flex justify-between items-center"
            >
                <AnimatedTextWord
                    delay={0.5}
                    text={ServicesListHeaderData.categoryMenuFirstRow}
                />

                <BasicAppearanceAnimation>
                    <IoIosArrowDown className={`${clicked ? "rotate-180" : "rotate-0"} duration-500 transition-all`} />
                </BasicAppearanceAnimation>
            </div>
            {services.map((service, i) => (
                <div key={i} className="py-2">{service.title}</div>
            ))}
        </motion.div>
    )
}

export default ServicesList