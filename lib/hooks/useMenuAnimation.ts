import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";


export function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isOpen != null || isOpen != undefined) {
            animate(isOpen
                ? [
                    [
                        "#nav",
                        { transform: "translateY(-100%)" },
                        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6, delay: 0.3 }
                    ],
                    [
                        ".menu-divider",
                        { transform: "translateX(0%)", },
                        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 }
                    ],
                    [
                        ".menu-contacts",
                        { x: "0" },
                        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3, at: 0.8 }
                    ],
                    [
                        "#ul li",
                        { transform: "translateY(0%)", opacity: 1, filter: "blur(0px)" },
                        { delay: stagger(0.05), at: "-0.1" }
                    ]
                ]
                : [
                    [
                        "#ul li",
                        { transform: "translateY(100%)", opacity: 0, filter: "blur(10px)" },
                        { delay: stagger(0.05, { from: "last" }), at: "<" }
                    ],
                    [".menu-divider", { transform: "translateX(-100%)" }],
                    [".menu-contacts", { x: "100%" }, { at: "-0.3" }],
                    ["#nav", { transform: "translateY(0%)" }, { at: "-0.1" }],
                ]
            );
        }
    }, [isOpen]);

    return scope;
}
