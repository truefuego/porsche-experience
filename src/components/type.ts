import React from "react";

export interface IVideoParallaxDetailsScreenWrapperProps {
    children: React.ReactNode;
    classes?: string;
    offset?: number;
};

export interface IScrollToSectionButtonProps {  
    componentRef: React.RefObject<HTMLDivElement | null>;
    texts: string[];
}