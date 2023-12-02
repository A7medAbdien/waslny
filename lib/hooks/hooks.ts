import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionTitle } from "../types";

export function useSectionInView(sectionName: SectionTitle, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection() {
  const threshold = 8;
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";
      if (scrollY < 25) {
        setScrollDirection("up")
      }
      if (direction !== scrollDirection && (scrollY - lastScrollY > threshold || scrollY - lastScrollY < -threshold)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
}

export function useScreenPosition() {
  const threshold = 0.7
  const [isScreenAtTop, setIsScreenAtTop] = useState<boolean>(true);

  useEffect(() => {

    const updateScreenPosition = () => {
      const scrollY = window.scrollY;

      const isAtTop = scrollY > threshold * window.innerHeight ? false : true
      if (isAtTop !== isScreenAtTop) {
        setIsScreenAtTop(isAtTop)
      }
    };
    window.addEventListener("scroll", updateScreenPosition); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScreenPosition); // clean up
    }
  }, [isScreenAtTop]);

  return isScreenAtTop;
}

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      const timeout = setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 750);

      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);

  return { isMenuOpen, setIsMenuOpen }
}
