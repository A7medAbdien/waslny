"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Transition() {
    const pathname = usePathname()

    return <AnimatePresence mode='wait'>
        <motion.div key={pathname}>

            <motion.div
                className='slide-in z-[999] transition-bg '
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1, borderRadius: '0' }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            ></motion.div>

            <motion.div
                className='slide-out z-[999]  transition-bg '
                initial={{ scaleY: 1, borderRadius: '0' }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            ></motion.div>
        </motion.div>
    </AnimatePresence>
};
