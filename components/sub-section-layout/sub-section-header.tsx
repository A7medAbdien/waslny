"use client";

import { headerFont } from '@/lib/fonts';
import { motion } from 'framer-motion';
import AnimatedTextWord from '../animations/AnimatedTextWord';

type SubSectionHeaderProps = {
    title: string;
    description?: string;
    className?: string;
    line?: boolean;
}

const SubSectionHeader = ({ title, description, className = "md:w-1/2 ml-5 lg:ml-48", line = true }: SubSectionHeaderProps) => {
    return (
        <div className={className}>
            {line && <motion.div
                className="hidden lg:block border w-7 lg:w-14 border-gray-700 rounded-full relative -left-14 lg:-left-28 top-8 origin-left"
                initial={{
                    scaleX: 0
                }}
                whileInView={{
                    scaleX: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.6,
                    delay: 0.6
                }}
            />}


            <AnimatedTextWord
                delay={0.2}
                className={`${headerFont.className} text-6xl font-light tracking-tight`}
                text={title}
            />

            {description && <AnimatedTextWord
                delay={0.4}
                staggerChildren={0.03}
                className="lg:w-3/4 mt-7"
                text={description}
            />
            }
        </div>
    )
}

export default SubSectionHeader