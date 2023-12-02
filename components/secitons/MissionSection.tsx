"use client";

import SubSectionHeader from '../sub-section-layout/sub-section-header';
import { missionSectionData } from '@/lib/data';
import Image from 'next/image';
import BasicAppearanceAnimation from '../animations/BasicAppearanceAnimation';
import { BasicButton } from '../buttons';
import MediaAppearanceAnimation from '../animations/MediaAppearanceAnimation';
import AnimatedTextWord from '../animations/AnimatedTextWord';

type Props = {}

const MissionSection = () => {
    const { title, description, img } = missionSectionData

    return (
        <div className='flex flex-col lg:flex-row items-center max-lg:gap-8 lg:justify-between min-h-screen lg:h-screen'>

            <div className=" ml-5 lg:ml-48 flex flex-col justify-between items-start max-lg:gap-8 lg:h-2/3">
                <div>
                    <AnimatedTextWord
                        className={"uppercase font-medium tracking-widest text-sm muted-text-color mb-5"}
                        text={"Our mission is"}
                    />

                    <SubSectionHeader
                        className=''
                        title={title}
                        description={description}
                    />
                </div>

                <div className="order-last">
                    <BasicAppearanceAnimation>
                        <BasicButton>
                            Learn More
                        </BasicButton>
                    </BasicAppearanceAnimation>
                </div>
            </div>

            <MediaAppearanceAnimation className="w-4/5 m-20 mt-0 lg:h-3/4 lg:w-3/4 lg:ml-10 lg:mr-[12vw]">
                <Image
                    width={400}
                    height={400}
                    src={img}
                    alt={title}
                    className="w-full h-full rounded-[4rem]"
                />
            </MediaAppearanceAnimation>

        </div>
    )
}

export default MissionSection
