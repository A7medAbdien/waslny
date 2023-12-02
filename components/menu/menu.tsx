import { links, socialMediaData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { clsx } from "clsx";
import { useMenuAnimation } from "@/lib/hooks/useMenuAnimation";
import { MenuToggle } from "./menuToggle";
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io"
import { contentFont, headerFont } from "@/lib/fonts";
import { Service } from "@/lib/types";


const SocialMediaLinks = () => {
    return (
        <div className="absolute z-20 right-0 top-10 lg:-top-1/4 lg:-translate-y-full flex lg:flex-col items-center gap-5  p-4">
            {socialMediaData.map((item, index) => (
                <Link href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                    <div className=" group flex h-20 w-20 items-center justify-center rounded-full border SocialMediaLinks-border-color text-center">
                        <div className="absolute h-20 w-20 scale-0 rounded-full SocialMediaLinks-bg transition-all duration-300 group-hover:scale-100 group-hover:duration-300 group-hover:ease-in"></div>
                        <div className="relative z-20 text-3xl group-hover:SocialMediaLinks-icon-hovered-color translate-y-0.5">
                            {item.icon}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export function Menu({ isMenuOpen, setIsMenuOpen }: { setIsMenuOpen: (value: React.SetStateAction<boolean>) => void, isMenuOpen: boolean }) {

    const pathname = usePathname()
    const [lastHover, setLastHover] = useState<typeof links[number] | null>()
    const [lastSubMenuHover, setLastSubMenuHover] = useState<Service | null>()
    const [lastTailMenuHover, setLastTailMenuHover] = useState<string | null>()
    const [activeFoldMenu, setActiveFoldMenu] = useState<string | null>()

    const scope = useMenuAnimation(isMenuOpen);
    // const scope = React.useRef(null)

    const subMenuVariants = {
        show: { transform: "translateY(0%)", filter: "blur(0px)" },
        hide: { transform: "translateY(100%)", filter: "blur(10px)", transition: { delay: 0.2 } }
    };
    const subMenuLiVariants = {
        show: { transform: "translateY(0%)", opacity: 1, filter: "blur(0px)" },
        hide: { transform: "translateY(100%)", opacity: 0, filter: "blur(10px)", transition: { delay: 0 } }
    };

    const subFoldMenuLiVariants = {
        show: { display: "block", transform: "translateY(0%)", opacity: 1, filter: "blur(0px)" },
        hide: { display: "none", transform: "translateY(100%)", opacity: 0, filter: "blur(10px)" }
    };

    return (
        <div >
            <div ref={scope}>
                <nav id="nav" className={`${headerFont.className} ${(lastHover != null) ? lastHover?.color : links.find((link) => pathname.includes(link.url))?.color} transition-all duration-700 fixed top-[100%] left-0 w-screen h-screen px-3 lg:px-8 xl:px-20 pt-32 lg:pt-40`}>
                    {/* <nav className="bg-red-100" > */}

                    <ul id="ul" className="flex flex-col font-light tracking-[-0.1rem] overflow-auto max-h-[80%] lg:h-auto lg:overflow-hidden">

                        <div className="sticky z-10 top-0 ">
                            <div className="menu-divider">
                                <div className="block h-12 w-1/2 lg:w-20 border-black border-t-2" />
                                <div className="absolute top-[0.1rem] blur-sm h-12 w-1/2 lg:w-20 border-black border-t-2" />
                            </div>
                        </div>

                        {links.slice(1).map((link) => (
                            <React.Fragment key={link.url}>
                                <Link href={link.url}>
                                    <li
                                        className={clsx(`text-5xl md:text-4xl lg:text-6xl py-1 md:py-2 lg:py-3 uppercase transition-all menu-text-color text-opacity-60`,
                                            {
                                                "!text-opacity-100 tracking-widest": ((!lastHover) || (link.url == lastHover?.url)),
                                            }
                                        )}
                                        onClick={(link.url != pathname) ? () => (setIsMenuOpen(false), setLastHover(null)) : undefined}
                                        onMouseOver={() => (setLastHover(link), setLastSubMenuHover(null))}
                                    >

                                        {link.title}

                                        {link.subServices && <div
                                            className="lg:hidden fixed z-50 right-2 -translate-y-10 text-4xl"
                                            onClick={() => setActiveFoldMenu(activeFoldMenu == link.url ? null : link.url)}
                                        >
                                            <IoIosArrowDown className={`${link.url == activeFoldMenu ? "rotate-180" : "rotate-0"} transition-all`} />
                                        </div>}
                                    </li>
                                </Link>

                                {/* folded menu */}

                                {link.subServices &&
                                    <div
                                        className={`lg:hidden lg:my-2 transition-all 
                                            divide-solid divide-black border-black divide-y-2 ${isMenuOpen && link.url == activeFoldMenu && "border-t-2 border-b-2 "}
                                            ${contentFont.className} capitalize text-3xl`}
                                    >
                                        {link.subServices.map((subLink, i) =>
                                            <motion.div
                                                key={subLink.title}
                                                variants={subFoldMenuLiVariants}
                                                animate={(isMenuOpen && activeFoldMenu == link.url) ? 'show' : 'hide'}
                                                initial={{ display: "none", transform: "translateY(100%)", opacity: 0, filter: "blur(10px)" }}
                                                transition={{ ease: "easeOut", delay: 0.05 * i, duration: 0.5 }}
                                                className={`p-2`}
                                            >
                                                {subLink.title}
                                            </motion.div>
                                        )}
                                    </div>
                                }
                            </React.Fragment>
                        ))}

                        <div className="sticky bottom-0">
                            <div className="menu-divider">
                                <div className="block h-12 w-1/2 lg:w-20 border-black border-b-2" />
                                <div className="absolute top-[0.1rem] blur-sm h-12 w-1/2 lg:w-20 border-black border-b-2" />
                            </div>
                        </div>

                    </ul>


                    {/* sub menu pop-ups */}

                    <motion.div
                        variants={subMenuVariants}
                        animate={(isMenuOpen && lastHover?.subServices) ? 'show' : 'hide'}
                        initial={{ y: '100%' }}
                        transition={{ ease: "easeOut", duration: 0.4 }}
                        className="hidden lg:block absolute z-20 h-[78%] w-1/5 bottom-0 left-[30%] rounded-t-full first-sub-menu-bg  pt-32 px-10"
                    >

                        <ul className="flex flex-col font-light capitalize">
                            {lastHover?.subServices?.map((service, i) => (
                                <Link key={service.url} href={service.url}>
                                    <motion.li
                                        variants={subMenuLiVariants}
                                        animate={(isMenuOpen && lastHover?.subServices) ? 'show' : 'hide'}
                                        initial={{ transform: "translateY(100%)", opacity: 0, filter: "blur(10px)" }}
                                        transition={{ ease: "easeOut", delay: 0.4 + 0.05 * i, duration: 0.3 }}
                                        className={clsx("text-4xl  py-2 transition-all first-sub-menu-text-color text-opacity-60",
                                            {
                                                "!text-opacity-100": (service.url == lastSubMenuHover?.url || !lastSubMenuHover),
                                            }
                                        )}
                                        onClick={(service.url != pathname) ? () => (setIsMenuOpen(false)) : undefined}
                                        onMouseOver={() => (setLastSubMenuHover(service), setLastTailMenuHover(null))}
                                    >
                                        {service.title}
                                    </motion.li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        // onMouseLeave={() => setLastSubMenuHover(null)}
                        variants={subMenuVariants}
                        animate={(isMenuOpen && lastHover?.subServices && lastSubMenuHover?.subServices) ? 'show' : 'hide'}
                        initial={{ y: 100 }}
                        transition={{ ease: "easeOut", duration: 0.4 }}
                        className="hidden lg:block absolute z-20 h-[78%] w-1/5 bottom-0 left-[30%]  rounded-t-full second-sub-menu-bg pt-32 px-10 ml-[20%]"
                    >

                        <ul className="flex flex-col font-light capitalize overflow-auto max-h-[90%] styledScrollBar">
                            {lastSubMenuHover?.subServices?.map((service, i) => (
                                <Link key={service.url} href={service.url}>
                                    <motion.li
                                        variants={subMenuLiVariants}
                                        animate={(isMenuOpen && lastHover?.subServices && lastSubMenuHover?.subServices) ? 'show' : 'hide'}
                                        initial={{ transform: "translateY(100%)", opacity: 0, filter: "blur(10px)" }}
                                        transition={{ ease: "easeOut", delay: 0.4 + 0.05 * i, duration: 0.3 }}
                                        className={clsx("text-3xl py-2 transition-all second-sub-menu-text-color text-opacity-60",
                                            {
                                                "!text-opacity-100": (!lastTailMenuHover || (service.url == lastTailMenuHover)),
                                            }
                                        )}
                                        onClick={(service.url != pathname) ? () => (setIsMenuOpen(false)) : undefined}
                                        onMouseOver={() => setLastTailMenuHover(service.url)}
                                    >
                                        {service.title}
                                    </motion.li>
                                </Link>
                            ))}
                        </ul>

                    </motion.div>

                    <div className="hidden lg:block absolute z-5 h-[78%] w-full bottom-0 left-[30%]" />

                    <div className="menu-contacts">
                        {/* <div className="absolute right-0 top-1/4 translate-y-1/2 mr-14 hidden lg:flex flex-col items-center gap-5  p-4"> */}
                        <SocialMediaLinks />
                    </div>
                </nav>
            </div>



            <button
                onClick={() => (setIsMenuOpen(!isMenuOpen), setLastHover(null), setActiveFoldMenu(null))}
                className="absolute top-8 right-4 lg:right-1/2  lg:translate-x-6 select-none"
            >
                <MenuToggle open={isMenuOpen} />
            </button>
        </div >
    );
}
