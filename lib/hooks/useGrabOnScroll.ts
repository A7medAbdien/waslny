import React, { useEffect, useState } from 'react'

type Props = { id: string }

const useGrabOnScroll = (id: string) => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const content = document.getElementById(id);
        if (!content) return;

        const handleMouseDown = (e: MouseEvent) => {
            setIsDown(true);
            setStartX(e.pageX - content.offsetLeft);
            setStartY(e.pageY - content.offsetTop);
            setScrollLeft(content.scrollLeft);
            setScrollTop(content.scrollTop);
            content.style.cursor = "grabbing";
        };

        const handleMouseLeave = () => {
            setIsDown(false);
            content.style.cursor = "grab";
        };

        const handleMouseUp = () => {
            setIsDown(false);
            content.style.cursor = "grab";
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - content.offsetLeft;
            const y = e.pageY - content.offsetTop;
            const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
            const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
            content.scrollLeft = scrollLeft - walkX;
            content.scrollTop = scrollTop - walkY;
        };

        content.addEventListener("mousedown", handleMouseDown);
        content.addEventListener("mouseleave", handleMouseLeave);
        content.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            content.removeEventListener("mousedown", handleMouseDown);
            content.removeEventListener("mouseleave", handleMouseLeave);
            content.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDown, startX, startY, scrollLeft, scrollTop]);
}

export default useGrabOnScroll