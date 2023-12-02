"use client";

import { massageSectionData } from '@/lib/data';
import Image from 'next/image';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import { BasicButton } from '../buttons';
import MediaAppearanceAnimation from '../animations/MediaAppearanceAnimation';
import { headerFont } from '@/lib/fonts';
import AnimatedTextWord from '../animations/AnimatedTextWord';

type Props = typeof massageSectionData

const MassageSection = ({ title, description, img }: Props) => {

    return (
        <div className='flex flex-row items-start md:items-center justify-between lg:justify-center min-h-screen md:h-screen'>
            <div className="w-full md:w-[70%] lg:w-[40%] md:py-20 h-full flex flex-col justify-between items-start max-md:gap-8 lg:ml-[4rem]">
                <div>

                    <AnimatedTextWord
                        className={`${headerFont.className} text-7xl font-light tracking-tight leading-[1.2] max-md:h-[20rem]`}
                        text={title}
                    />


                    <AnimatedTextWord
                        staggerChildren={0.03}
                        delayChildren={0.04}
                        text={description}
                        className="mt-7 text-xl font-medium leading-9" />

                    <AnimatedTextWord
                        className={"uppercase font-medium tracking-widest text-sm muted-text-color my-10"}
                        text={"Our mission is"}
                    />

                </div>

                <div className="order-last md:py-8 ">
                    <BasicAppearanceAnimation>
                        <BasicButton className='tracking-wide'>
                            get to know us
                        </BasicButton>
                    </BasicAppearanceAnimation>
                </div>

            </div>


            <div className="absolute right-5 lg:static w-[10rem] md:w-1/3 lg:w-1/4 h-[22rem] md:h-screen">
                <MediaAppearanceAnimation className="w-full h-full relative lg:left-[-4rem] -z-10 rounded-full overflow-hidden" >
                    <Image
                        width={400}
                        height={400}
                        src={img}
                        alt={title}
                        className="w-full h-full"
                    />
                </MediaAppearanceAnimation>
            </div>

        </div>
    )
}

export default MassageSection
