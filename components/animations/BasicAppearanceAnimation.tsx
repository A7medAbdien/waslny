"use client";

import React from 'react';
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode,
    delay?: number
    className?: string
}

const BasicAppearanceAnimation = ({ children, className, delay = 0 }: Props) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{
                    y: "100%",
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                    ease: "easeOut",
                    duration: 0.8,
                    delay
                }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default BasicAppearanceAnimation