"use client";

import CarouselWithButtons from '../carousels/CarouselWithButtons';
import AnimatedTextWord from '../animations/AnimatedTextWord';
import { headerFont } from '@/lib/fonts';
import { ImageType } from '@/lib/types';

type Props = { slides: ImageType[] }

const FeedBackSection = ({ slides }: Props) => {

    return (
        <>
            <div className="flex flex-col justify-center items-center">

                <div className="flex flex-col justify-center items-center -mb-32 md:-mb-24 lg:mb-0 max-sm:ml-5">
                    <AnimatedTextWord
                        height="h-[4.5rem]"
                        delay={0.2}
                        className={`${headerFont.className} text-6xl font-light tracking-tight`}
                        text={"What they say about us"}
                    />


                    <div className="lg:hidden">
                        <AnimatedTextWord
                            // height="h-[4.5rem]"
                            delay={0.2}
                            className={`text-lg uppercase font-light tracking-tight muted-text-color mt-16 `}
                            text={"Swap to see more"}
                        />
                    </div>
                </div>

                <CarouselWithButtons slides={slides} />
            </div>
        </>
    )
}

export default FeedBackSection