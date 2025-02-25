import React, { useRef, useEffect, useState } from "react";
import PorscheExperience from "../assets/videos/porsche-experience-video.mp4";
import { motion } from "framer-motion";
import VideoParallaxDetailsScreenWrapper from "./VideoParallaxDetailsScreenWrapper";

const VideoParallax: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

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
                <VideoParallaxDetailsScreenWrapper />
                <VideoParallaxDetailsScreenWrapper />
                <VideoParallaxDetailsScreenWrapper />
                <VideoParallaxDetailsScreenWrapper />
                <VideoParallaxDetailsScreenWrapper />
                <VideoParallaxDetailsScreenWrapper />
            </motion.div>
        </div>
    );
};

export default VideoParallax;
