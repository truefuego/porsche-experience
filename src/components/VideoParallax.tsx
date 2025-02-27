import React, { useRef, useEffect, useState } from "react";
import PorscheExperience from "../assets/videos/porsche-experience-video.mp4";
import { useScroll } from "framer-motion";
import VideoParallaxDetailsScreenWrapper from "./VideoParallaxDetailsScreenWrapper";
import ScrollToSectionButton from "./ScrollToSectionButton";
import SidePanelWrapper from "./SidePanelWrapper";
import OpenPanelButton from "./OpenPanelButton";

const VideoParallax: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: contentContainerRef,
      offset: ["start start", "end end"],
    });
    const [scrollProgress, setScrollProgress] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        <div className="w-screen h-screen flex items-end justify-center text-white">
                            <ScrollToSectionButton texts={["Scroll Down", "Track Performance", "German Engineering"]} scrollOffset={200}/>
                            <div className="flex flex-col w-screen mb-16 gap-4">
                                <p className="text-6xl sm:text-8xl md:text-9xl xl:text-9xl 2xl:text-[10rem] ml-4">Porsche</p>
                                <p className="text-7xl sm:text-[8rem] md:text-[11rem] xl:text-[16rem] 2xl:text-[19rem] text-end xl:leading-[14rem] mb-0 mr-4">911 GT3 R</p>
                            </div>
                        </div>
                    </VideoParallaxDetailsScreenWrapper>
                    <VideoParallaxDetailsScreenWrapper
                        scrollYProgress={scrollYProgress}
                        index={.95}
                    >
                        <div className="w-screen h-screen flex gap-12 flex-col items-center mt-[60vh]">
                            <p className="text-xl md:text-3xl text-white font-medium" onClick={() => setIsModalOpen(true)}>Engineered for precision and dominance</p>
                            <OpenPanelButton text="Race-Bred Precision" setIsVisible={setIsModalOpen} classes="" />
                        </div>
                    </VideoParallaxDetailsScreenWrapper>
                    <VideoParallaxDetailsScreenWrapper
                        scrollYProgress={scrollYProgress}
                        index={2}
                    >
                        <p className="text-4xl text-white">Porsche</p>
                    </VideoParallaxDetailsScreenWrapper>
                </div>
            </div>
            <SidePanelWrapper isVisible={isModalOpen} setIsVisible={setIsModalOpen}>
                <p className="text-5xl text-black">hi</p>
            </SidePanelWrapper>
        </div>
    );
};

export default VideoParallax;
