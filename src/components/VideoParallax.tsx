import React, { useRef, useEffect, useState } from "react";
import PorscheExperience from "../assets/videos/porsche-experience-video.mp4";
import { useScroll } from "framer-motion";
import VideoParallaxDetailsScreenWrapper from "./VideoParallaxDetailsScreenWrapper";
import ScrollToSectionButton from "./ScrollToSectionButton";

const VideoParallax: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: contentContainerRef,
      offset: ["start start", "end end"],
    });
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
            <div
                className="h-[800vh]"
                style={{ pointerEvents: scrollProgress === 1 ? "none" : "auto" }}
                ref={containerRef}
            >
                <video
                    ref={videoRef}
                    src={PorscheExperience}
                    playsInline
                    muted
                    className="fixed w-full h-full object-cover -z-10"
                />
                <div ref={containerRef} className="h-[800vh] relative">
                    <VideoParallaxDetailsScreenWrapper
                        scrollYProgress={scrollYProgress}
                        index={0}
                    >
                        <div className="w-screen h-screen flex items-center justify-center text-white">
                            <ScrollToSectionButton texts={["Scroll Down", "Track Performance", "German Engineering"]} scrollOffset={350}/>
                            <p>hi</p>
                        </div>
                    </VideoParallaxDetailsScreenWrapper>
                    <VideoParallaxDetailsScreenWrapper
                        scrollYProgress={scrollYProgress}
                        index={1}
                    >
                        <p className="text-4xl text-white">Porsche GT3 R</p>
                    </VideoParallaxDetailsScreenWrapper>
                </div>
            </div>
        </div>
    );
};

export default VideoParallax;
