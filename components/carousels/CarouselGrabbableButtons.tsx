"use client"

import { motion } from 'framer-motion'
import ArrowCircle from '../svgs/ArrowCircle'
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

type Props = {
    // CarouselGrabbableId: string;
    onRight: () => void;
    onLeft: () => void;
}

const CarouselGrabbableButtons = ({ onLeft, onRight }: Props) => {

    return (<>
        <ArrowCircle left action={() => onLeft()} />


        <motion.div
            className="border w-10 mx-10  border-gray-700 rounded-full relative origin-left"
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
                duration: 0.6,
                delay: 0.6
            }}
        />

        <ArrowCircle action={() => onRight()} />
    </>
    )
}

export default CarouselGrabbableButtons