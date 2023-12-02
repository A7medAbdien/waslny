import React from 'react';
import { motion } from "framer-motion";


type Props = { children: React.ReactNode, delay?: number }

const CarouselAppearanceAnimation = ({ children, delay = 0 }: Props) => {
    return (
        <motion.div
            initial={{
                y: 50, opacity: 0
            }}
            whileInView={{
                y: 0, opacity: 1
            }}
            viewport={{
                once: true,
            }}
            transition={{
                ease: "easeOut",
                duration: 0.8,
                delay
            }}
        >
            <motion.div
                className="absolute z-10 top-0 primary-bg w-full h-full transform origin-bottom"
                initial={{
                    scaleY: 1
                }}
                whileInView={{
                    scaleY: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    ease: "easeOut",
                    duration: 0.8,
                    delay
                }}
            />
            {children}
        </motion.div>
    )
}

export default CarouselAppearanceAnimation