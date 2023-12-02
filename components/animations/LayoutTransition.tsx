// source is https://github.com/vercel/next.js/discussions/42658#discussioncomment-6993457

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const LayoutTransition = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const lastPageRef = useRef<HTMLCollection | null>(null);
    const currentPageRef = useRef<HTMLDivElement>(null);
    const exitAnimationDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!currentPageRef.current) return;
        if (!lastPageRef.current)
            lastPageRef.current = currentPageRef.current.children;

        exitAnimationDivRef.current?.appendChild(
            lastPageRef.current![0].cloneNode(true)
        );
        lastPageRef.current = currentPageRef.current.children;
    }, [pathname]);

    return (
        <AnimatePresence initial={false}>
            <div>
                <motion.div
                    key={pathname + "exit-animation"}
                    style={{
                        position: "absolute",
                    }}
                    initial={{ x: 0 }}
                    animate={{
                        display: 'none'
                    }}
                    transition={{
                        type: "linear",
                        duration: 0,
                    }}
                >
                    <div ref={exitAnimationDivRef} />
                </motion.div>

                <motion.div
                    key={pathname}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "easeOut", duration: 1, delay: 1.2 }}
                >
                    <AnimatePresence initial={true}>
                        <div ref={currentPageRef}>{children}</div>
                    </AnimatePresence>
                </motion.div>
            </div>

        </AnimatePresence>
    );
};