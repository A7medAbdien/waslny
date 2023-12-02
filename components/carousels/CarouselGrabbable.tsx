"use client";

import useGrabOnScroll from "@/lib/hooks/useGrabOnScroll";
import React, { forwardRef } from "react";
import CarouselAppearanceAnimation from "../animations/carouselAnimation";
import { Service } from "@/lib/types";


type CarouselGrabbableProps = {
    meta: any[] | Service[],
    GrabbableId: string
} & {
    twice?: boolean,
    initialSlide?: boolean
    className?: string,
    children: React.ReactNode
}

const CarouselGrabbable = forwardRef<HTMLDivElement, CarouselGrabbableProps>((
    {
        meta,
        GrabbableId,
        twice = false,
        initialSlide = false,
        className,
        children
    },
    ref) => {

    useGrabOnScroll(GrabbableId)
    const dataArray = twice ? meta.concat(meta) : meta

    return (
        <CarouselAppearanceAnimation>
            <div className="h-full w-screen hover:cursor-grab select-none">
                <div
                    ref={ref}
                    id={GrabbableId}
                    className={className}
                >

                    {initialSlide && <div className={`inline-block flex-[1_0_100px] first:ml-8`}>
                        {React.cloneElement(children as React.ReactElement<any>, { initial: true })}
                    </div>}

                    {dataArray.map((data, index) => (
                        <div key={index} className={`inline-block flex-[1_0_100px]`}>
                            {React.cloneElement(children as React.ReactElement<any>, { ...data })}
                        </div>
                    ))}
                </div>
            </div>
        </CarouselAppearanceAnimation>
    );
})

CarouselGrabbable.displayName = 'CarouselGrabbable';

export default CarouselGrabbable;
