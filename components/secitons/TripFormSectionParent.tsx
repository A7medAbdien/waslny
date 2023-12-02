"use client";

import { useState } from 'react';
import AnimatedTextWord from "../animations/AnimatedTextWord";
import { headerFont } from "@/lib/fonts";
import MediaAppearanceAnimation from "../animations/MediaAppearanceAnimation";
import Image from 'next/image';
import start from '@/public/imgs/start.jpeg';



const TripFormSectionData = {
    startingPositionTitle: "Starting Position",
    startingPositionDescription: "Select your starting position",
    startingTimeTitle: "Frequency",
    startingTimeDescription: "Select your starting time",
    numSeatsTitle: "Seats Number",
    numSeatsDescription: "Enter the number of children",
    destinationTitle: "Ending Position",
    destinationDescription: "Select your ending position",
    submitTitle: "Select the driver..",
    // submitDescription: "You all set let go"
}

const selectData = [
    "One Time",
    "Monthly Subscription",
]

type Props = {
    negativeMargin?: boolean,
    fullWidthOnLgScreen?: boolean
}

export default function TripFormSectionParent({ negativeMargin = false, fullWidthOnLgScreen = false }: Props) {
    // const { ref } = useSectionInView("Contact");

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-8 py-20 '>
            <div className="relative w-full h-1/2 grid grid-cols-12 gap-4">
                <div className="lg:col-start-2 col-start-2 lg:col-span-6 col-span-10">
                    <AnimatedTextWord
                        delay={0.2}
                        wordsSpacing="mr-[1rem]"
                        height="h-[4.2rem] lg:h-[rem]"
                        className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight justify-center`}
                        text={TripFormSectionData.startingPositionTitle}
                    />
                    <div className="hidden md:flex justify-center">
                        <AnimatedTextWord
                            delay={0.4}
                            className={`${negativeMargin && ""}`}
                            staggerChildren={0.03}
                            text={TripFormSectionData.startingPositionDescription}
                        />
                    </div>
                    <MediaAppearanceAnimation className="border-neutral-800 border-2 max-lg:rounded-b-full lg:rounded-l-full h-96 overflow-hidden">
                        {/* <Image className='w-screen' src={nathan} width={400} height={400} alt=''></Image> */}
                        <div className="w-full h-full overflow-hidden">
                            <Image
                                width={400}
                                height={400}
                                src={start}
                                alt=''
                                className="w-full h-full"
                            />
                        </div>
                    </MediaAppearanceAnimation>
                </div>
                <div className="lg:col-start-8 col-start-2 lg:col-span-4 col-span-10 lg:pl-5 my-20 lg:my-0 flex flex-col justify-between gap-20">
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                            text={TripFormSectionData.startingTimeTitle}
                        />
                        <div className="hidden md:flex">
                            <AnimatedTextWord
                                delay={0.4}
                                className={`${negativeMargin && ""}`}
                                staggerChildren={0.03}
                                text={TripFormSectionData.startingTimeDescription}
                            />
                        </div>
                        {/* <MediaAppearanceAnimation className="lg:pt-1"> */}
                        {/* <input
                                className="w-full h-14 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                type="time"
                                maxLength={500}
                                placeholder={TripFormSectionData.startingTimeTitle}
                            /> */}

                        <SelectDropdown />
                        {/* </MediaAppearanceAnimation> */}
                    </div>
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                            text={TripFormSectionData.numSeatsTitle}
                        />
                        <MediaAppearanceAnimation className="lg:pt-1">
                            <input
                                className="w-full h-14 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                type="number"
                                maxLength={500}
                                placeholder={TripFormSectionData.numSeatsDescription}
                            />
                        </MediaAppearanceAnimation>
                    </div>
                </div>
                <div className="lg:col-start-2 col-start-2 lg:col-span-6 col-span-10">
                    <AnimatedTextWord
                        delay={0.2}
                        wordsSpacing="mr-[1rem]"
                        height="h-[4.2rem] lg:h-[rem]"
                        className={`${headerFont.className} justify-center text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                        text={TripFormSectionData.destinationTitle}
                    />
                    <div className="hidden md:flex justify-center">
                        <AnimatedTextWord
                            delay={0.4}
                            className={`${negativeMargin && ""}`}
                            staggerChildren={0.03}
                            text={TripFormSectionData.destinationDescription}
                        />
                    </div>
                    <MediaAppearanceAnimation className="border-neutral-800 border-2 max-lg:rounded-b-full lg:rounded-l-full h-96 overflow-hidden">
                        {/* <Image className='w-screen' src={nathan} width={400} height={400} alt=''></Image> */}
                        <div className="w-full h-full overflow-hidden">
                            <Image
                                width={400}
                                height={400}
                                src={start}
                                alt=''
                                className="w-full h-full"
                            />
                        </div>
                    </MediaAppearanceAnimation>
                </div>
            </div>
        </div>
    )
}

const SelectDropdown: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select className='bg-transparent w-full h-10 rounded-3xl mt-5 text-xl border-[3px] SocialMediaLinks-border-color px-4' value={selectedOption} onChange={handleOptionChange}>
                {selectData.map(
                    (option, index) => (<option key={index}>{option}</option>))}
            </select>
        </div>
    );
};