"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { headerFont } from '@/lib/fonts';
import { Blog } from '@/lib/types';
import AnimatedTextWord from '@/components/animations/AnimatedTextWord';
import CarouselGrabbable from '@/components/carousels/CarouselGrabbable';
import { BlogsListHeaderData } from '@/lib/data/blog';
import BlogsSlide from '@/components/carousels/slides/BlogsSlide';

type Params = {
    blogs: Blog[]
}
const BlogList = ({ blogs }: Params) => {
    const ref = useRef<HTMLDivElement>(null)
    const slidesPerCarousel = 4;
    const carouselsCount = blogs.length > slidesPerCarousel ? Array.from(Array(Math.ceil(blogs.length / slidesPerCarousel)).keys()) : [];

    return (<div className='flex flex-col overflow-hidden mb-20'>

        {/* Carousel - small screens */}
        {blogs.length > 0 && (
            carouselsCount.length > 0 ? carouselsCount.map((i) =>
                <React.Fragment key={i}>
                    <CarouselGrabbable
                        ref={ref}
                        GrabbableId={"MainServicesCarouselGrabbable"}
                        meta={blogs.slice(i * slidesPerCarousel, (i + 1) * slidesPerCarousel)}
                        className="lg:hidden flex h-full flex-nowrap gap-7 overflow-x-auto hideScrollBar pr-20 mb-10" //to show the rest of slide 
                    >
                        <Slide title={''} description={''} img={''} link={''} date={''} author={''} />
                    </CarouselGrabbable>
                </React.Fragment>) :

                <CarouselGrabbable
                    ref={ref}
                    GrabbableId={"MainServicesCarouselGrabbable"}
                    meta={blogs}
                    className="lg:hidden flex h-full flex-nowrap gap-7 overflow-x-auto hideScrollBar pr-20 mb-10" //to show the rest of slide 
                >
                    <Slide title={''} description={''} img={''} link={''} date={''} author={''} />
                </CarouselGrabbable>)}

        {/* List - large screens */}
        {blogs && <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5'
        >
            {blogs.map((blog, i) => (
                <div key={i}>
                    <Slide {...blog} />
                </div>
            ))}
        </motion.div >}

    </div>)
}

const Slide = (blog: Blog) => (
    <BlogsSlide
        {...blog}
        className="w-[20rem] h-[66vh] xl:max-h-[33rem] p-5 blogSlideBorderRadius border-2 border-gray-700 overflow-hidden"
    />
);

export const BlogsListHeader = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center mb-24 -mt-14 px-5 lg:px-0'>
            <AnimatedTextWord
                height='h-[5.2rem]'
                wordsSpacing='mr-7'
                className={`${headerFont.className} text-6xl lg:text-7xl font-extralight tracking-tighter`}
                text={BlogsListHeaderData.headerTitle}
            />
        </div >
    )
}

export default BlogList