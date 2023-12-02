"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import CarouselAppearanceAnimation from "../animations/carouselAnimation";
import Image from "next/image";
import ArrowCircle from "../svgs/ArrowCircle";
import { ImageType } from "@/lib/types";

type Props = { slides: ImageType[] }


function CarouselWithButtons({ slides }: Props) {
    const [position, positionSet] = useState(0);

    const slideOffset = 2
    const slideWidth: number = 25

    const slideStyle = `absolute w-[25rem] h-[80vh] top-[-35vh]`

    const handlers = useSwipeable({
        onSwipedLeft: () => positionSet(position + 1),
        onSwipedRight: () => positionSet(position - 1),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const onRight = () => {
        positionSet(position + 1);
    }
    const onLeft = () => {
        positionSet(position - 1);
    }
    const getCenterIndex = (position: number): number => {
        return (position + slides.length + slideOffset) % slides.length
    }
    const getShownSlides = (centerIndex: number): number[] => {
        return [
            // (centerIndex - 2 + slides.length) % slides.length,
            (centerIndex - 1 + slides.length) % slides.length,
            centerIndex,
            (centerIndex + 1) % slides.length,
            // (centerIndex + 2) % slides.length,
        ]
    }
    const getPosition = (index: number, slideWidth: number): number => {
        return ((index - position) % slides.length + slides.length) % slides.length * slideWidth - (slideWidth * slideOffset + slideWidth / 2)
    }

    const leftArrowsVariants = {
        show: { x: [5, 0, 20, 0, 10, 0, 5] },
        hide: { x: 0 }
    };
    const rightArrowsVariants = {
        show: { x: [-5, 0, -20, 0, -10, 0, -5] },
        hide: { x: 0 }
    };

    return (
        <CarouselAppearanceAnimation>

            <div {...handlers} className="relative w-screen h-[90vh] flex justify-center items-center overflow-hidden">
                <motion.div
                    onClick={onRight}
                    className="hidden lg:block absolute top-[53%] right-1/2 group CarouselWithButtons-arrow-bg rounded-full"
                    initial={{
                        zIndex: 0, opacity: 0
                    }}
                    whileInView={{
                        x: "45vw", zIndex: 10, opacity: 1
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.8,
                        delay: 0.3
                    }}
                >
                    <ArrowCircle action={() => onRight()} />
                </motion.div>


                <motion.div
                    onClick={onLeft} className="hidden lg:block absolute top-[53%]  left-1/2 group CarouselWithButtons-arrow-bg rounded-full"
                    initial={{
                        zIndex: 0, opacity: 0
                    }}
                    whileInView={{
                        x: "-45vw", zIndex: 10, opacity: 1
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        ease: "easeOut",
                        duration: 0.8,
                        delay: 0.3
                    }}
                >
                    <ArrowCircle left action={() => onLeft()} />
                </motion.div>

                <div className="relative scale-75 lg:scale-100 ">
                    {slides.map((url, index) => {
                        const centerIndex = getCenterIndex(position);

                        return (
                            <motion.div
                                className={slideStyle}
                                key={index}
                                initial={{ scale: 0 }}
                                animate={{
                                    opacity: getShownSlides(centerIndex).includes(index) ? 1 : 0,
                                    zIndex: getShownSlides(centerIndex).includes(index) ? 1 : 0,
                                    left: `${getPosition(index, slideWidth)}rem`,
                                    scale: index === centerIndex ? 1 : 0.8,
                                }}
                                transition={{
                                    ease: "easeOut",
                                    duration: 0.8
                                }}
                            >
                                <Image width={400} height={400} className="w-full h-full rounded-full" alt="slide" src={url} />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </CarouselAppearanceAnimation>
    );
}

export default CarouselWithButtons;