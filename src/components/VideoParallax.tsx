import React, { useRef, useEffect, useState } from "react";
import PorscheExperience from "../assets/videos/porsche-experience-video.mp4";
import { motion } from "framer-motion";
import VideoParallaxDetailsScreenWrapper from "./VideoParallaxDetailsScreenWrapper";
import ScrollToSectionButton from "./ScrollToSectionButton";

const VideoParallax: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const firstDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
        if (!containerRef.current || !videoRef.current) return;

        const scrollTop = window.scrollY;
        const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
        const progress = Math.min(scrollTop / maxScroll, 1);
        setScrollProgress(progress);

        const video = videoRef.current;
            video.currentTime = progress * video.duration;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef}>
            <motion.div
                className="h-[800vh]"
                style={{ pointerEvents: scrollProgress === 1 ? "none" : "auto" }}
                transition={{ duration: 0.5 }}
                ref={containerRef}
            >
                <video
                    ref={videoRef}
                    src={PorscheExperience}
                    playsInline
                    muted
                    className="fixed w-full h-full object-cover -z-10"
                />
                <VideoParallaxDetailsScreenWrapper classes="w-screen">
                    <ScrollToSectionButton componentRef={firstDivRef} texts={["Scroll Down", "Track Performance", "German Engineering"]} />
                    <div className="h-screen flex w-screen items-end justify-end">
                        <h1 className="text-9xl">911 GT3 R</h1>
                    </div>
                </VideoParallaxDetailsScreenWrapper>
                <VideoParallaxDetailsScreenWrapper offset={0.85}>
                    <div ref={firstDivRef} className="flex h-screen w-screen items-center">
                        <h1 className="text-9xl">911 GT3 R</h1>
                    </div>
                </VideoParallaxDetailsScreenWrapper>
                <VideoParallaxDetailsScreenWrapper>
                    <h1 className="text-9xl">911 GT3 R</h1>
                </VideoParallaxDetailsScreenWrapper>
            </motion.div>
        </div>
    );
};

export default VideoParallax;
