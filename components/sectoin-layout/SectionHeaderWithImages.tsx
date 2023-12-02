"use client";

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MediaAppearanceAnimation from '../animations/MediaAppearanceAnimation';
import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { SectionHeaderWithImages } from '@/lib/types';


const SectionHeaderWithImages = ({ images, headerData }: SectionHeaderWithImages) => {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.5 0.5", "1 0"]
    });
    const yProcess = useTransform(scrollYProgress, [0, 1], [0, -150]);


    return (
        <div ref={ref} className="relative w-full">
            <SectionHeader {...headerData} />

            <MediaAppearanceAnimation
                animate
                style={{ translateY: yProcess }}
                className="hidden lg:block absolute transition-all ease-out top-1/2 -left-1 -z-10 w-[16.5rem] h-[32rem] rounded-full border-0 overflow-hidden">
                <Image src={images[0]} width={400} height={400} alt={""} className="w-full h-full" />
            </MediaAppearanceAnimation>
            <MediaAppearanceAnimation
                animate
                style={{ translateY: yProcess }}
                className="hidden lg:block absolute  transition-all ease-out top-[-80%] left-[20%] -z-10 w-[16rem] h-[32rem] rounded-full border-0 overflow-hidden">
                <Image src={images[1]} width={400} height={400} alt={""} className="w-full h-full" />
            </MediaAppearanceAnimation>

            <MediaAppearanceAnimation
                style={{ translateY: yProcess }}
                className="hidden lg:block absolute  transition-all ease-out  top-1/4 left-3/4 -z-10 w-[18rem] h-[26rem] rounded-full border-0 overflow-hidden">
                <Image src={images[2]} width={400} height={400} alt={""} className="w-full h-full" />
            </MediaAppearanceAnimation>

        </div>
    )
}

export default SectionHeaderWithImages