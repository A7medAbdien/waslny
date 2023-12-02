import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


type Props = {
    left?: boolean,
    action: () => void
}

const ArrowCircle = ({ left = false, action }: Props) => {

    const [hovered, hover] = useState(false)
    const circleVariate = {
        show: { pathLength: 1 },
        hide: { pathLength: 0 }
    };
    const initArrowVariants = {
        show: { x: 0 },
        hide: { x: left ? -100 : 100 }
    };
    const arrowVariants = {
        show: { x: 0 },
        hide: { x: left ? 100 : -100 }
    };

    return (
        <div
            onClick={action}
            onMouseOver={() => hover(true)}
            onMouseOut={() => hover(false)}
            className='flex flex-row justify-center items-center cursor-pointer'>

            <svg
                className="w-20 h-20"
                width="105"
                height="105"
                viewBox="0 0 105 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="relative">

                    <circle
                        data-delay="true"
                        r="50.625"
                        transform="matrix(-1 0 0 1 51 51)"
                        stroke="#AAAAAA"
                        strokeWidth="0.75"
                    />

                    <motion.circle
                        data-delay="true"
                        r="50.625"
                        transform={left ? "matrix(1 0 0 -1 51 51)" : "matrix(-1 0 0 1 51 51)"}
                        stroke="#333333"
                        strokeWidth="0.75"
                        className="absolute top-0 left-0"

                        initial={{ pathLength: 0 }}
                        variants={circleVariate}
                        animate={hovered ? 'show' : 'hide'}
                        transition={{ ease: "easeOut", duration: 0.8 }}
                    />
                </g>
            </svg>

            <div className='overflow-hidden absolute'>

                <motion.div
                    initial={{ x: 100 }}
                    animate={hovered ? 'show' : 'hide'}
                    variants={arrowVariants}
                    transition={{ ease: "easeOut", duration: 0.8 }}
                >
                    {left ?
                        <BsArrowLeft className="text-4xl text-gray-700 absolute top-0" />
                        :
                        <BsArrowRight className="text-4xl text-gray-700 absolute top-0" />
                    }
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={!hovered ? 'show' : 'hide'}
                    variants={initArrowVariants}
                    transition={{ ease: "easeOut", duration: 0.8 }}
                >
                    {left ?
                        <BsArrowLeft className="text-4xl text-gray-400" />
                        :
                        <BsArrowRight className="text-4xl text-gray-400" />
                    }
                </motion.div>

            </div>
        </div >
    )
}

export default ArrowCircle