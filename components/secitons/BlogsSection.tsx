"use client";

import { blogsSectionData } from '@/lib/data';
import { useRef } from 'react';
import SubSectionHeader from '../sub-section-layout/sub-section-header';
import CarouselGrabbableButtons from '../carousels/CarouselGrabbableButtons';
import CarouselGrabbable from '../carousels/CarouselGrabbable';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import BlogsSlide from '../carousels/slides/BlogsSlide';

type Props = {}

const BlogsSection = (props: Props) => {

    const ref = useRef<HTMLDivElement>(null)
    const onLeft = () => {
        if (!ref.current) return null
        ref.current.scrollTo({
            left: ref.current.scrollLeft - 200,
            top: 0,
            behavior: "smooth"
        });
    }
    const onRight = () => {
        if (!ref.current) return null
        ref.current.scrollTo({
            left: ref.current.scrollLeft + 200,
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className="flex flex-col md:flex-row">

                <SubSectionHeader
                    title="Lorem, ipsum dolor."
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt totam, ex nemo magnam, aliquid vel inventore, eius porro voluptate deserunt pariatur"
                />

                <div className="hidden w-1/2 md:flex flex-row justify-center items-center">
                    <BasicAppearanceAnimation>
                        <div className="hidden md:flex flex-row justify-center items-center">
                            <CarouselGrabbableButtons onLeft={onLeft} onRight={onRight} />
                        </div>
                    </BasicAppearanceAnimation>
                </div>

            </div>

            <div>
                <CarouselGrabbable
                    ref={ref}
                    GrabbableId={"BlogsCarouselGrabbable"}
                    meta={blogsSectionData}
                    twice
                    className="ml-5 lg:ml-48 flex flex-nowrap gap-7 overflow-x-auto my-14 hideScrollBar"
                >
                    <BlogsSlide
                        className="w-[20rem] h-[66vh] xl:max-h-[33rem] p-7 blogSlideBorderRadius border-2 border-gray-700 overflow-hidden"
                    />
                </CarouselGrabbable>
            </div>

        </>
    )
}

export default BlogsSection