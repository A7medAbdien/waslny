"use client";

import AnimatedTextWord from "../animations/AnimatedTextWord";
import { headerFont } from "@/lib/fonts";
import MediaAppearanceAnimation from "../animations/MediaAppearanceAnimation";
import Link from "next/link";

const TripFormSectionData = {
    currentLocation: "Current Location",
    currentLocationDescription: "Check current location",
    duration: "Duration",
    durationDescription: "00:04:00",
    cost: "Cost",
    costDescription: "5.53 BD",
    destinationTitle: "Ending Position",
    destinationDescription: "Select your ending position",
    submitTitle: "Did You Arrived?",
    // submitDescription: "You all set let go"
}

type Props = {
    negativeMargin?: boolean,
    fullWidthOnLgScreen?: boolean
}

export default function TripSection({ negativeMargin = false, fullWidthOnLgScreen = false }: Props) {
    // const { ref } = useSectionInView("Contact");

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-8 py-20 '>
            <div className="relative w-full min-h-screen grid grid-cols-12 gap-4">
                <div className="lg:col-start-2 col-start-2 lg:col-span-6 col-span-10">
                    <AnimatedTextWord
                        delay={0.2}
                        wordsSpacing="mr-[1rem]"
                        height="h-[4.2rem] lg:h-[rem]"
                        className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight justify-center`}
                        text={TripFormSectionData.currentLocation}
                    />
                    <div className="hidden md:flex justify-center">
                        <AnimatedTextWord
                            delay={0.4}
                            className={`${negativeMargin && ""}`}
                            staggerChildren={0.03}
                            text={TripFormSectionData.currentLocationDescription}
                        />
                    </div>
                    <MediaAppearanceAnimation className="border-neutral-800 border max-lg:rounded-b-full lg:rounded-l-full px-10 h-96 lg:h-3/4  lg:pt-1">
                    </MediaAppearanceAnimation>
                </div>
                {/* Duration */}
                <div className="lg:col-start-8 col-start-2 lg:col-span-4 col-span-10 lg:pl-5 my-20 lg:my-0 flex flex-col gap-20">
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                            text={TripFormSectionData.duration}
                        />

                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-4xl lg:text-4xl lg:leading-[100%] font-light tracking-tight justify-center`}
                            text={TripFormSectionData.durationDescription}
                        />
                    </div>
                    {/* Cost */}
                    <div className="">
                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                            text={TripFormSectionData.cost}
                        />

                        <AnimatedTextWord
                            delay={0.2}
                            wordsSpacing="mr-[1rem]"
                            height="h-[4.2rem] lg:h-[rem]"
                            className={`${headerFont.className} text-4xl lg:text-4xl lg:leading-[100%] font-light tracking-tight justify-center`}
                            text={TripFormSectionData.costDescription}
                        />
                    </div>
                    <div className="lg:col-start-8 col-start-2 lg:col-span-4 col-span-10 lg:pl-5 my- lg:my-0 flex flex-col justify-center gap-20">
                        <div className="">
                            {/* <AnimatedTextWord
                                delay={0.2}
                                wordsSpacing="mr-[0.7rem]"
                                height="h-[4.2rem] lg:h-[rem]"
                                className={`${headerFont.className} text-6xl lg:text-6xl lg:leading-[100%] font-light tracking-tight`}
                                text={TripFormSectionData.submitTitle}
                            /> */}
                            <MediaAppearanceAnimation className="lg:pt-1 flex flex-row justify-center items-center ">
                                <Link href={"/role"} >
                                    <button className={`${headerFont.className} group button-bg text-4xl lg:text-6xl tracking-tight min-w-30 rounded-full py-5 px-8 uppercase truncate font-semibold outline-none active:scale-105 transition`}>
                                        <div className="flex flex-col justify-start items-start overflow-hidden lg:h-16 h-11">
                                            <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                                Arrived
                                            </div>
                                            <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                                                Arrived
                                            </div>
                                        </div>
                                    </button>
                                </Link>
                            </MediaAppearanceAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
