import AnimatedTextWord from '@/components/animations/AnimatedTextWord'
import BasicAppearanceAnimation from '@/components/animations/BasicAppearanceAnimation'
import MediaAppearanceAnimation from '@/components/animations/MediaAppearanceAnimation'
import ContactSection from '@/components/secitons/ContactSection'
import SectionBody from '@/components/sectoin-layout/section-body'
import { socialMediaData } from '@/lib/data'
import { contactData } from '@/lib/data/contact'
import { headerFont } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

export default function contactPage() {
    const t = Array.from({ length: 2 })
    return (
        <main className="flex flex-col items-center px-4">
            <div className="h-[70vh] w-screen grid grid-cols-12">
                <div className="col-span-11">
                    <ContactSection />
                </div>
                <div className="w-full h-full relative">
                    <div className="absolute w-full h-full -left-full top-0">
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
            <SectionBody footerNext className='p-5 lg:p-24'>

                <AnimatedTextWord
                    delay={0.2}
                    className={`${headerFont.className} text-6xl font-light tracking-tight`}
                    text={"title"}
                />

                <div className="grid lg:grid-rows-2 grid-cols-6 lg:grid-cols-12 gap-5 h-[90vh] mt-24">
                    <MediaAppearanceAnimation className="hidden lg:block border-neutral-800 border rounded-b-[4rem] row-span-2 col-span-5">
                        <div ></div>
                    </MediaAppearanceAnimation>
                    <MediaAppearanceAnimation className="border-neutral-800 border max-lg:rounded-t-full lg:rounded-e-full lg:col-start-7 col-span-6 px-10 pt-32 lg:pt-1">
                        <Table title={contactData.contactInfo1Title} data={contactData.contactInfo1} />
                    </MediaAppearanceAnimation>
                    <MediaAppearanceAnimation className="border-neutral-800 border max-lg:rounded-t-full lg:rounded-e-full lg:col-start-7 col-span-6 px-10 pt-32 lg:pt-1">
                        <Table title={contactData.contactInfo2Title} data={contactData.contactInfo2} />
                    </MediaAppearanceAnimation>
                </div>
            </SectionBody>
        </main>
    )
}

const Table = ({ title, data }: { title: string, data: any[] }) => {
    return <div className="items-start justify-center p-0 grid grid-cols-3 gap-3">
        <div className={`${headerFont.className} text-4xl font-light tracking-tight items-start justify-between col-span-3 `}>
            <AnimatedTextWord
                delay={0.3}
                staggerChildren={0.05}
                delayChildren={0.05}
                wordsSpacing={"mr-[0.2rem]"}
                className={"uppercase font-medium tracking-wide justify-start my-5"}
                text={title}
            />
        </div>
        {/* <LineSeparator /> */}
        {data.map((item, index) => (
            <React.Fragment key={index}>
                <AnimatedTextWord
                    delay={0.3}
                    staggerChildren={0.05}
                    delayChildren={0.05}
                    wordsSpacing={"mr-[0.2rem]"}
                    className={"uppercase font-medium tracking-wide justify-start footer-secondary-text-color col-span-1"}
                    text={item.title}
                />
                <AnimatedTextWord
                    delay={0.3}
                    staggerChildren={0.05}
                    delayChildren={0.05}
                    wordsSpacing={"mr-[0.2rem]"}
                    className={"uppercase font-medium tracking-wide justify-start col-span-2"}
                    text={item.description}
                />
            </React.Fragment>
        ))}
    </div>
}

const SocialMediaLinks = () => {
    return (
        <div className="right-0 flex flex-col items-center justify-center h-full w-full gap-5 p-4 -mt-10">
            <BasicAppearanceAnimation className='pt-10' delay={0.8}>
                <div className={"uppercase font-medium tracking-widest text-sm muted-text-color rotate-90 w-28 my-5"}>
                    {"Follow US"}
                </div>
            </BasicAppearanceAnimation>
            {socialMediaData.map((item, index) => (
                <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                    <BasicAppearanceAnimation delay={0.8}>
                        <div className="group flex h-16 w-16 items-center justify-center rounded-full border-2 SocialMediaLinks-border-color text-center">
                            <div className="absolute h-16 w-16 rounded-full transition-all duration-300"></div>
                            <div className="absolute h-16 w-16 scale-0 rounded-full FooterSocialMediaLinks-hovered-bg transition-all duration-300 group-hover:scale-[98%] group-hover:duration-300 group-hover:ease-in"></div>
                            <div className="relative z-20 text-3xl group-hover:text-red-50 translate-y-0.5">
                                {item.icon}
                            </div>
                        </div>
                    </BasicAppearanceAnimation>
                </Link>
            ))}
        </div>
    )
}

