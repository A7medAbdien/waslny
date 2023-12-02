import AnimatedTextWord from "@/components/animations/AnimatedTextWord";
import MediaAppearanceAnimation from "@/components/animations/MediaAppearanceAnimation";
import { headerFont } from "@/lib/fonts";
import Link from "next/link";


export default function RolePage() {
    return (
        <main className="flex flex-col items-center px-4 pt-20 lg:pt-5 ">

            <div className="flex flex-col items-center justify-center">
                <AnimatedTextWord
                    delay={0.4}
                    wordsSpacing="mr-[2rem]"
                    height="h-[9rem]"
                    className={`${headerFont.className} text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight`}
                    text={"Role"}
                />
            </div>

            <div
                className={`w-screen h-[60vh] rounded-[6rem] md:rounded-[9rem] leading-6 flex flex-col lg:flex-row justify-center items-center gap-5 p-24`}
            >
                {/* <RoleSection negativeMargin /> */}
                <MediaAppearanceAnimation
                    className=" h-full md:w-1/2  rounded-3xl border-4 border-neutral-700 hover:bg-wight group overflow-hidden relative"
                >
                    <Link href={"/driver"}>
                        <div className="group flex w-full h-full items-center justify-center rounded-full FooterSocialMediaLinks-border-color text-center">
                            {/* <div className="absolute w-full h-full rounded- full transition-all duration-300"></div> */}
                            <div className="absolute w-full h-full scale-0  FooterSocialMediaLinks-hovered-bg transition-all duration-300 group-hover:scale-100 group-hover:duration-300 group-hover:ease-in"></div>
                            <div className="relative z-20 text-3xl group-hover:FooterSocialMediaLinks-icon-hovered-color translate-y-0.5">
                                <AnimatedTextWord
                                    delay={0.2}
                                    wordsSpacing="mr-[2rem]"
                                    height="h-[5rem] lg:h-[9rem]"
                                    className={`${headerFont.className} max-lg:pl-5 text-6xl md:text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight group-hover:text-gray-300`}
                                    text={"Driver"}
                                />
                            </div>
                        </div>
                    </Link>
                </MediaAppearanceAnimation>
                <MediaAppearanceAnimation
                    className=" h-full md:w-1/2  rounded-3xl border-4 border-neutral-700 hover:bg-wight group overflow-hidden relative flex  items-center justify-center"
                >
                    <Link href={"/parent"}>
                        <div className="group w-full h-full flex  items-center justify-center rounded-full FooterSocialMediaLinks-border-color text-center">
                            {/* <div className="absolute w-full h-full rounded-full transition-all duration-300"></div> */}
                            <div className="absolute w-full h-full scale-0 FooterSocialMediaLinks-hovered-bg transition-all duration-300 group-hover:scale-100 group-hover:duration-300 group-hover:ease-in"></div>
                            <div className="relative z-20 text-3xl group-hover:FooterSocialMediaLinks-icon-hovered-color translate-y-0.5">
                                <AnimatedTextWord
                                    delay={0.2}
                                    wordsSpacing="mr-[2rem]"
                                    height="h-[5rem] lg:h-[9rem]"
                                    className={`${headerFont.className} max-lg:pl-5 text-6xl md:text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight group-hover:text-gray-300`}
                                    text={"Parent"}
                                />
                            </div>
                        </div>
                    </Link>
                </MediaAppearanceAnimation>
                <MediaAppearanceAnimation
                    className=" h-full md:w-1/2  rounded-3xl border-4 border-neutral-700 hover:bg-wight group overflow-hidden relative flex  items-center justify-center"
                >
                    <Link href={"/student"}>
                        <div className="group w-full h-full flex  items-center justify-center rounded-full FooterSocialMediaLinks-border-color text-center">
                            {/* <div className="absolute w-full h-full rounded-full transition-all duration-300"></div> */}
                            <div className="absolute w-full h-full scale-0  FooterSocialMediaLinks-hovered-bg transition-all duration-300 group-hover:scale-100 group-hover:duration-300 group-hover:ease-in"></div>
                            <div className="relative z-20 text-3xl group-hover:FooterSocialMediaLinks-icon-hovered-color translate-y-0.5">
                                <AnimatedTextWord
                                    delay={0.2}
                                    wordsSpacing="mr-[2rem]"
                                    height="h-[5rem] lg:h-[9rem]"
                                    className={`${headerFont.className} max-lg:pl-5 text-6xl md:text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight group-hover:text-gray-300`}
                                    text={"Student"}
                                />
                            </div>
                        </div>
                    </Link>
                </MediaAppearanceAnimation>
            </div>
        </main>
    );
}

