import { MotionValue } from "framer-motion";
import React from "react";

export interface IVideoParallaxDetailsScreenWrapperProps {
    children: React.ReactNode;
    classes?: string;
    scrollYProgress: MotionValue<number>;
    index: number;
    ref?: React.RefObject<HTMLDivElement | null>;
};

export interface IScrollToSectionButtonProps {
    texts: string[];
    scrollOffset?: number;
};
