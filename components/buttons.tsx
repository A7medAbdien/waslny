"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

type BasicButtonProps = {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export const BasicButton = ({ children, className, url = "/" }: BasicButtonProps) => {
    return (
        <Link href={url} >
            <button className={`group button-bg text-xl lg:text-sm tracking-tight min-w-30 rounded-full py-5 px-8 uppercase truncate font-semibold outline-none active:scale-105 transition ${className}`}>
                <div className="flex flex-col justify-start items-start overflow-hidden h-7">
                    <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                        {children}
                    </div>
                    <div className="group-hover:-translate-y-full transition-all duration-500 ease-out">
                        {children}
                    </div>
                </div>
            </button>
        </Link>
    )
}

type BouncingButtonProps = BasicButtonProps & {
    variants: any;
}

export const BouncingButton = ({ children, variants }: BouncingButtonProps) => {
    const [isMouseOverRight, setMouseOverRight] = useState(false);

    return (
        <motion.div
            // onClick={action}
            // className={className}
            onMouseOver={() => setMouseOverRight(true)}
            onMouseOut={() => setMouseOverRight(false)}
            variants={variants}
            animate={isMouseOverRight ? "show" : "hide"}
            transition={isMouseOverRight ? {
                duration: 2,
                ease: "easeOut",
                times: [0, 0.3, 0.5, 0.8, 1, 1.2],
                repeat: Infinity,
                repeatDelay: 1
            } : undefined}
        >
            <button>
                {children}
            </button>
        </motion.div>
    )
}
