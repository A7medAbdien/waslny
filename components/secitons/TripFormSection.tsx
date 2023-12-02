"use client";

import AnimatedTextWord from "../animations/AnimatedTextWord";
import { headerFont } from "@/lib/fonts";
import MediaAppearanceAnimation from "../animations/MediaAppearanceAnimation";
import { BasicButton } from "../buttons";
import Link from "next/link";

const TripFormSectionData = {
    startingPositionTitle: "Starting Position",
    startingPositionDescription: "Select your starting position",
    startingTimeTitle: "Starting Time",
    startingTimeDescription: "Select your starting time",
    numSeatsTitle: "Seats Number",
    numSeatsDescription: "Select number of available seats",
    destinationTitle: "Ending Position",
    destinationDescription: "Select your ending position",
    submitTitle: "You all set lets go..",
    // submitDescription: "You all set let go"
}

type Props = {
    negativeMargin?: boolean,
    fullWidthOnLgScreen?: boolean
}

export default function TripFormSection({ negativeMargin = false, fullWidthOnLgScreen = false }: Props) {
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
                    <MediaAppearanceAnimation className="border-neutral-800 border max-lg:rounded-b-full lg:rounded-l-full px-10 h-96 lg:pt-1">
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
                        <MediaAppearanceAnimation className="lg:pt-1">
                            <input
                                className="w-full h-14 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                type="time"
                                maxLength={500}
                                placeholder={TripFormSectionData.startingTimeTitle}
                            />
                        </MediaAppearanceAnimation>
                    </div>
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                            text={TripFormSectionData.numSeatsTitle}
                        />
                        <div className="hidden md:flex">
                            <AnimatedTextWord
                                delay={0.4}
                                className={`${negativeMargin && ""}`}
                                staggerChildren={0.03}
                                text={TripFormSectionData.numSeatsDescription}
                            />
                        </div>
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
                    <MediaAppearanceAnimation className="border-neutral-800 border max-lg:rounded-b-full lg:rounded-l-full px-10 h-96 lg:pt-1">
                    </MediaAppearanceAnimation>
                </div>
                <div className="lg:col-start-8 col-start-2 lg:col-span-4 col-span-10 lg:pl-5 my-20 lg:my-0 flex flex-col justify-center gap-20">
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[0.7rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight mb-4`}
                            text={TripFormSectionData.submitTitle}
                        />
                        <MediaAppearanceAnimation className="lg:pt-1 flex flex-row justify-center items-center">
                            <Link href={"/trip/asldkfjlkafsjdlaslkdjsal"} >
                                <button className={`${headerFont.className} group button-bg text-4xl lg:text-6xl tracking-tight min-w-30 rounded-full py-5 px-8 uppercase truncate font-semibold outline-none active:scale-105 transition`}>
                                    <div className="flex flex-col justify-start items-start overflow-hidden lg:h-16 h-11">
                                        <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                            Submit
                                        </div>
                                        <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                            Submit
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </MediaAppearanceAnimation>
                    </div>
                </div>
            </div>

        </div>
    )
}
