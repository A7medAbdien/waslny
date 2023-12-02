
import AnimatedTextWord from "@/components/animations/AnimatedTextWord";
import SectionHeader from "@/components/sectoin-layout/SectionHeader";
import { homeHeaderSectionData } from "@/lib/data/home";
import { headerFont } from "@/lib/fonts";

const data = {
    title: "Booked Successfully",
}

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <div className="mt-28">
                <div className={`page-header-text-color h-[90vh] flex flex-col -mt-32 items-center justify-center`}>
                    <AnimatedTextWord
                        delay={1.5 + 0.3}
                        wordsSpacing={"mr-[0.5rem]"}
                        className={"uppercase text-xl tracking-wide muted-text-color justify-center"}
                        text={"Have a safe drive"}
                    />

                    <AnimatedTextWord
                        delay={1.5 + 0.5}
                        height="h-[4.2rem] md:h-[4.5rem] lg:h-[9rem]"
                        wordsSpacing={"mr-[1rem]"}
                        className={`w-3/4 md:w-[50vw] my-10 justify-center
        ${headerFont.className} capitalize text-6xl lg:text-9xl font-light ${"tracking-[-0.1em]"}`}
                        text={data.title}
                    />
                </div>
            </div>
        </main>
    );
}
