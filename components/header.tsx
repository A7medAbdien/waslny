"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Logo from './svgs/Logo';

import { useScreenPosition, useScrollDirection, useToggleMenu } from '@/lib/hooks/hooks';
import { Menu } from './menu/menu';
import { BasicButton } from './buttons';
import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {

    const scrollDirection = useScrollDirection();
    const isScreenAtTop = useScreenPosition();
    const { isMenuOpen, setIsMenuOpen } = useToggleMenu();
    // const scope = useMenuAnimation(isMenuOpen);

    const headerBGVariants = {
        show: { y: 0, transition: { delay: 0.5, duration: 0.5, ease: "easeOut" } },
        hide: { y: -110, }
    };
    const headerVariants = {
        show: { y: 0, opacity: 1 },
        hide: { y: -100, opacity: 0 }
    };


    return (
        <header className={`z-[99] relative`}>
            <AnimatePresence initial={false}>

                <nav
                    className={`fixed top-0 left-0 w-screen lg:px-16 grid grid-cols-4 gap-x-5 max-h-1 lg:grid-cols-12 lg:gap-x-10  select-none`}
                >

                    <motion.div
                        variants={headerBGVariants}
                        animate={(isScreenAtTop || isMenuOpen || scrollDirection == "down") ? 'hide' : 'show'}
                        initial={{ y: -110 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute w-full base-bg !bg-opacity-80 top-0 py-12 " />


                    <div className={clsx("z-10 col-start-6 col-span-2 flex justify-center items-center transition-all ease-out duration-300", {
                        "opacity-0": (scrollDirection == "down"),
                        "opacity-100 duration-1000": (scrollDirection != "down"),
                    })}>
                        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </div>


                    <motion.div
                        variants={headerVariants}
                        animate={(scrollDirection == "down") ? 'hide' : 'show'}
                        initial={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="z-10 col-start-1">
                        <Link href={'/'} >
                            <button onClick={() => (setIsMenuOpen(false))} >
                                <Logo />
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={headerVariants}
                        animate={(scrollDirection == "down") ? 'hide' : 'show'}
                        initial={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="z-10 col-start-9 col-span-2 hidden lg:flex justify-end items-center">
                        <BasicButton>
                            Call us
                        </BasicButton>
                    </motion.div>

                    <motion.div
                        variants={headerVariants}
                        animate={(scrollDirection == "down") ? 'hide' : 'show'}
                        initial={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="z-10 col-start-11 col-span-3 hidden lg:flex justify-start items-center">
                        <BasicButton className='-ml-4 tracking-tighter min-w-40'>
                            Book an appointment
                        </BasicButton>
                    </motion.div>

                </nav>
            </AnimatePresence >

        </header >

    )
}
