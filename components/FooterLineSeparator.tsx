"use client";

import { motion } from 'framer-motion';

const LineSeparator = ({ className }: { className?: string }) => {
    return <motion.div
        className={`${className} border-b-2 w-full border-stone-300 rounded-full relative left-0 origin-left`}
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
            duration: 1,
        }}
    />
}

export default LineSeparator