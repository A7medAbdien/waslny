"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../submit-btn";
import toast from "react-hot-toast";
import AnimatedTextWord from "../animations/AnimatedTextWord";
import { headerFont } from "@/lib/fonts";
import BasicAppearanceAnimation from "../animations/BasicAppearanceAnimation";
import { contactUsDescription } from "@/lib/data";

type Props = {
    negativeMargin?: boolean,
    fullWidthOnLgScreen?: boolean
}

export default function ContactSection({ negativeMargin = false, fullWidthOnLgScreen = false }: Props) {
    // const { ref } = useSectionInView("Contact");

    return (
        <div className='flex flex-row items-center justify-center'>

            <div className={`flex ${!fullWidthOnLgScreen && "lg:w-3/4"} w-full md:flex-row flex-col justify-between items-center`}>
                <div className="md:w-1/2 max-lg:pl-5">
                    <AnimatedTextWord
                        delay={0.2}
                        wordsSpacing="mr-[2rem]"
                        className={`${headerFont.className} text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight`}
                        text={"Get"}
                    />
                    <AnimatedTextWord
                        delay={0.2}
                        wordsSpacing="mr-[2rem]"
                        className={`${headerFont.className} text-8xl lg:text-[7.8rem] lg:leading-[100%] font-light tracking-tight`}
                        text={"in touch"}
                    />
                    <div className="hidden md:flex">
                        <AnimatedTextWord
                            delay={0.4}
                            className={`${negativeMargin && "-mb-8"} mt-10`}
                            staggerChildren={0.03}
                            text={contactUsDescription}
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 max-lg:px-5">
                    <form
                        className="mt-10 flex flex-col dark:text-black"
                        action={async (formData) => {
                            const { data, error } = await sendEmail(formData);

                            if (error) {
                                toast.error(error);
                                return;
                            }

                            toast.success("Email sent successfully!");
                        }}
                    >
                        <BasicAppearanceAnimation>
                            <input
                                className="w-full h-14 px-4 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                name="name"
                                type="text"
                                required
                                maxLength={500}
                                placeholder="NAME"
                            />
                        </BasicAppearanceAnimation>
                        <BasicAppearanceAnimation>
                            <input
                                className="w-full h-14 px-4 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                name="phone"
                                type="phone"
                                required
                                maxLength={500}
                                placeholder="MOBILE"
                            />
                        </BasicAppearanceAnimation>
                        <BasicAppearanceAnimation>
                            <input
                                className="w-full h-14 px-4 bg-transparent border-b-2 border-stone-800  border-opacity-30 focus:border-opacity-100 focus:outline-none transition-all"
                                name="senderEmail"
                                type="email"
                                required
                                maxLength={500}
                                placeholder="EMAIL"
                            />
                        </BasicAppearanceAnimation>
                        <BasicAppearanceAnimation>
                            <textarea
                                className="w-full h-28 px-4 my-3 bg-transparent border-b-2 border-stone-800  border-opacity-50 focus:border-opacity-100 focus:outline-none transition-all"
                                name="message"
                                placeholder="MESSAGE"
                                required
                                maxLength={5000}
                            />
                        </BasicAppearanceAnimation>
                        <div className="flex flex-col justify-center items-center">
                            <BasicAppearanceAnimation>
                                <SubmitBtn />
                            </BasicAppearanceAnimation>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}
