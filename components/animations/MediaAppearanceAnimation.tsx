"use client";

import React from 'react';
import { motion } from 'framer-motion';


type Props = {
    children: React.ReactNode,
    className?: string,
    duration?: number,
    animate?: boolean,
    style?: any,
    delay?: number
    circOut?: boolean
}

const MediaAppearanceAnimation = ({ children, className, duration = 1.5, delay = 0.5, animate = false, style, circOut = false }: Props) => {
    return (
        <motion.div
            initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }}
            whileInView={!animate ? {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            } : {}}
            animate={animate ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
            viewport={{ once: true }}
            transition={{
                delay,
                duration,
                ease: circOut ? "circOut" : "easeOut"
            }}
            style={style}
            className={`${className}`}
        >
            {children}
        </motion.div>

    )
}

export default MediaAppearanceAnimation