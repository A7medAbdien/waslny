"use client";

import { headerFont } from "@/lib/fonts";
import BasicAppearanceAnimation from "../animations/BasicAppearanceAnimation";
import AnimatedTextWord from "../animations/AnimatedTextWord";
import { BasicButton } from "../buttons";

type SectionHeadingProps = {
  title: string;
  description?: string;
  mutedText?: string;
  buttonUrl?: string;
  home?: boolean;
  className?: string;
};

export default function SectionHeader({ title, description, mutedText, buttonUrl, home = false, className }: SectionHeadingProps) {
  return (
    <div className={`page-header-text-color h-[90vh] flex flex-col -mt-32 items-center justify-center ${className}`}>
      {mutedText && <AnimatedTextWord
        delay={0.3}
        wordsSpacing={"0.2rem"}
        className={"uppercase text-xl tracking-wide muted-text-color justify-center"}
        text={mutedText}
      />}

      <AnimatedTextWord
        delay={0.5}
        height="h-[4.2rem] md:h-[4.5rem] lg:h-[9rem]"
        wordsSpacing={"mr-[1rem]"}
        className={`w-3/4 md:w-[50vw] my-10 justify-center
        ${headerFont.className} capitalize text-6xl lg:text-9xl font-light ${home && "tracking-[-0.1em]"}`}
        text={title}
      />

      {description &&
        <AnimatedTextWord
          delay={0.4}
          wordsSpacing={"0.2rem"}
          className="w-3/4 md:w-[33vw] mb:14 lg:mb-16 justify-center gap-1"
          text={description}
        />
      }

      {buttonUrl &&
        <div className="my-16 lg:my-20">
          <BasicAppearanceAnimation delay={0.8}>
            <BasicButton url={buttonUrl}>
              Book
            </BasicButton>
          </BasicAppearanceAnimation >
        </div>
      }
    </div>
  );
}