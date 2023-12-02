"use client";
import BasicAppearanceAnimation from "./animations/BasicAppearanceAnimation";
import AnimatedTextWord from "./animations/AnimatedTextWord";
import LineSeparator from "./FooterLineSeparator";
import { footerData } from "@/lib/data";
import FooterSocialMediaLinks from "./FooterSocialMediaLinks";
import Link from "next/link";

// -mt-36 pt-72  flex flex-col items-center justify-between

const FooterTable = ({ title, data }: { title: string, data: any[] }) => {
    return <div className="flex flex-col items-start justify-center mt-10">
        <div className="items-start justify-between w-full">
            <AnimatedTextWord
                delay={0.3}
                staggerChildren={0.05}
                delayChildren={0.05}
                wordsSpacing={"mr-[0.2rem]"}
                className={"uppercase font-medium tracking-wide justify-start  my-5"}
                text={title}
            />
        </div>
        <LineSeparator />
        {data.map((item, index) => (
            <Link key={index} href={item.url}>
                <div className="items-start justify-between w-full select-none group transition-all">
                    <AnimatedTextWord
                        delay={0.3}
                        staggerChildren={0.05}
                        delayChildren={0.05}
                        wordsSpacing={"mr-[0.2rem]"}
                        className={"uppercase font-medium tracking-wide justify-start footer-secondary-text-color my-3 group-hover:tracking-[0.2rem] transition-all"}
                        text={item.title}
                    />
                </div>
            </Link>
        ))}
    </div>
}

export default function Footer() {

    return (
        <footer className="
        -mt-36 pt-36
        footer-bg min-h-screen lg:h-[120vh]
        text-center footer-primary-text-color lg:text-lg text-sm
        overflow-hidden
        ">
            <div className="w-full h-1/4 lg:h-1/6 grid grid-cols-6 gap-2 px-5 lg:px-24">
                <div className="col-start-3 col-span-2 lg:col-start-1 ">
                    <div className="flex flex-col items-center justify-center h-full">
                        <BasicAppearanceAnimation>
                            {footerData.logo}
                        </BasicAppearanceAnimation>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-3 lg:col-end-7">

                    <div className="flex flex-col items-center justify-center h-full">
                        <AnimatedTextWord
                            delay={0.3}
                            staggerChildren={0.05}
                            delayChildren={0.05}
                            wordsSpacing={"mr-[0.2rem]"}
                            className={"uppercase font-medium tracking-wide justify-center   my-10"}
                            text={footerData.description}
                        />
                    </div>
                </div>
            </div>

            <div className=" relative bg-black h-1/6">
                <LineSeparator className="top-0 !absolute z-10" />
                <LineSeparator className="bottom-0 !absolute z-10" />
            </div>

            <div className=" w-full h-3/4 lg:h-1/2 grid grid-cols-12 gap-3 px-5 lg:px-24">
                <div className=" col-span-12 lg:col-span-5">
                    <div className="flex flex-col items-start justify-center mt-10">
                        <div className="grid grid-cols-3 items-start justify-between w-full">
                            <AnimatedTextWord
                                delay={0.3}
                                staggerChildren={0.05}
                                delayChildren={0.05}
                                wordsSpacing={"mr-[0.2rem]"}
                                className={"uppercase font-medium tracking-wide justify-start  my-5"}
                                text={footerData.tableTitles["contact"]}
                            />
                            <div className="col-span-2"></div>
                            <LineSeparator className="col-span-3" />
                        </div>
                        {footerData.contactUsData.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 items-start justify-between w-full">
                                <AnimatedTextWord
                                    delay={0.3}
                                    staggerChildren={0.05}
                                    delayChildren={0.05}
                                    wordsSpacing={"mr-[0.2rem]"}
                                    className={"uppercase font-medium tracking-wide justify-start  my-5"}
                                    text={item.title}
                                />
                                <AnimatedTextWord
                                    delay={0.3}
                                    staggerChildren={0.05}
                                    delayChildren={0.05}
                                    wordsSpacing={"mr-[0.2rem]"}
                                    className={"col-span-2 uppercase font-medium tracking-wide justify-start  footer-secondary-text-color my-5"}
                                    text={item.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-6 lg:col-start-8 lg:col-span-2">
                    <FooterTable title={footerData.tableTitles["sections"]} data={footerData.sectionsData} />
                </div>

                <div className="col-span-6 lg:col-start-11 lg:col-span-2">
                    <FooterTable title={footerData.tableTitles["services"]} data={footerData.servicesData} />
                </div>
            </div>

            <div className="mt-12 lg:mt-0 w-full h-1/4 lg:h-1/6 grid grid-cols-12 gap-3 px-5 lg:px-24">
                <div className="col-span-12 lg:col-span-3 
                flex flex-col items-center justify-center">
                    <BasicAppearanceAnimation>
                        <FooterSocialMediaLinks />
                    </BasicAppearanceAnimation>
                </div>
                <div className="col-span-12 lg:col-span-2 
                flex flex-col lg:text-start text-center justify-center
                ">
                    <BasicAppearanceAnimation>
                        <div className="mb-2 block w-full">
                            &copy; 2030 | Ricardo.
                        </div>
                    </BasicAppearanceAnimation>
                </div>
                <div className="col-span-12 lg:col-start-8 lg:col-span-5
                flex flex-col lg:text-start text-center justify-center
                ">
                    <BasicAppearanceAnimation>
                        <p className="text-xs">
                            {footerData.note}
                        </p>
                    </BasicAppearanceAnimation>
                </div>
            </div>

        </footer>
    );
}


