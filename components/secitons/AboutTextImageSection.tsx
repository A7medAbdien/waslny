"use client";

import SubSectionHeader from '../sub-section-layout/sub-section-header';
import Image from 'next/image';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import { BasicButton } from '../buttons';
import MediaAppearanceAnimation from '../animations/MediaAppearanceAnimation';
import AnimatedTextWord from '../animations/AnimatedTextWord';
import { AboutTextImageSectionData } from '@/lib/types';

const AboutTextImageSection = ({ title, description, img, mutedText }: AboutTextImageSectionData) => {


    return (
        <div className='flex flex-col lg:flex-row items-end lg:items-start lg:justify-between'>

            <div className=" ml-5 lg:ml-48 flex flex-col justify-between items-start max-lg:gap-8">
                <div>
                    <AnimatedTextWord
                        className={"uppercase font-medium tracking-widest text-sm muted-text-color mb-5"}
                        text={mutedText}
                    />

                    <SubSectionHeader
                        className='leading-8'
                        title={title}
                        description={description}
                    />
                </div>

                <div className="order-last mb-10 lg:my-10">
                    <BasicAppearanceAnimation>
                        <BasicButton>
                            Learn More
                        </BasicButton>
                    </BasicAppearanceAnimation>
                </div>
            </div>

            <MediaAppearanceAnimation className="w-[95%] lg:w-[170rem] mr-0 h-[24rem]">
                <Image
                    width={400}
                    height={400}
                    src={img}
                    alt={title}
                    className="w-full h-full rounded-s-full"
                />
            </MediaAppearanceAnimation>

        </div>
    )
}

export default AboutTextImageSection
