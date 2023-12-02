"use client";

import { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BasicAppearanceAnimation from './animations/BasicAppearanceAnimation';
import MediaAppearanceAnimation from './animations/MediaAppearanceAnimation';

type Props = {
    url: string;
    negativeMargin?: boolean;
}

const Video = ({ url, negativeMargin = false }: Props) => {
    // to stop Text content does not match server-rendered HTML warning
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const videoSource = useMemo(() => {
        return (
            <source src={url} type="video/mp4" />
        );
    }, []);

    // handel Play on InView
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref, inView } = useInView({
        threshold: 0
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (inView === true && videoRef.current) {
                videoRef.current.play();
            }
        }, 900);

        return () => {
            clearTimeout(timeoutId);
        };
    });

    // handel mute onClick
    const [clicked, click] = useState(false);

    const variants = {
        unmute: { y: "-100%" },
        mute: { y: "0%" }
    }



    return (
        <section>
            <div
                className='mt-36 lg:mt-60 flex flex-col items-center justify-center'
                ref={ref}
                onClick={() => click(!clicked)}
            >

                <h4 className={"text-md md:text-xl font-medium tracking-tight muted-text-color flex flex-row gap-1"}>
                    <BasicAppearanceAnimation delay={1}>
                        Click to
                    </BasicAppearanceAnimation>

                    <BasicAppearanceAnimation delay={1}>
                        <span
                            className="uppercase font-semibold super-muted-text-color overflow-hidden max-h-5 md:max-h-8 gap-0 flex flex-col items-center"
                        >
                            <motion.span
                                initial={{ y: "0%" }}
                                variants={variants}
                                animate={!clicked ? "mute" : "unmute"}
                            >
                                {" "} unmute {" "}
                            </motion.span>
                            <motion.span
                                initial={{ y: "0%" }}
                                variants={variants}
                                animate={!clicked ? "mute" : "unmute"}
                            >
                                {" "} mute {" "}
                            </motion.span>
                        </span>
                    </BasicAppearanceAnimation>

                    <BasicAppearanceAnimation delay={1}>
                        the volume
                    </BasicAppearanceAnimation>
                </h4>

                <MediaAppearanceAnimation
                    delay={0}
                    circOut
                    className={`h-[34vh] md:h-[50vh] lg:h-screen w-screen ${negativeMargin && "mb-[-30vh] lg:mb-[-50vh]"}  origin-top`}
                >
                    {isClient &&
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover rounded-[4rem]"
                            muted={!clicked}
                            loop
                        >
                            {videoSource}
                        </video>
                    }
                </MediaAppearanceAnimation>
            </div>
        </section>
    )
}

export default Video