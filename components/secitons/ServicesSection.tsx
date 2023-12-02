"use client";

import { useRef } from 'react';
import SubSectionHeader from '../sub-section-layout/sub-section-header';
import CarouselGrabbableButtons from '../carousels/CarouselGrabbableButtons';
import CarouselGrabbable from '../carousels/CarouselGrabbable';
import FoldedMenu from '../foldedMenu/FoldedMenu';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import ServicesSlide from '../carousels/slides/ServicesSlide';
import { services } from '@/lib/data/services';

type Props = {}

const ServicesSection = (props: Props) => {
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

                <div className="md:hidden">
                    <FoldedMenu data={services} />
                </div>
            </div>

            <div className="hidden md:flex">
                <CarouselGrabbable
                    ref={ref}
                    GrabbableId={"MainServicesCarouselGrabbable"}
                    meta={services}
                    twice
                    initialSlide
                    className="flex h-full flex-nowrap gap-7 overflow-x-auto my-14 hideScrollBar"
                >
                    <ServicesSlide
                        className="w-[20rem] h-[70vh] xl:max-h-[50rem] rounded-full border-2 border-gray-700 overflow-hidden"
                    />
                </CarouselGrabbable>
            </div>

        </>
    )
}

export default ServicesSection