import React from "react";

const VideoParallax: React.FC = () => {
    // const [height, setHeight] = React.useState(window.innerHeight);
    // const [width, setWidth] = React.useState(window.innerWidth);
    // const playerRef = React.useRef<ReactPlayer>(null);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setHeight(window.innerHeight);
    //         setWidth(window.innerWidth);
    //     };
    //     window.addEventListener("resize", handleResize);
    //     return window.removeEventListener("resize", handleResize);
    // }, []);

    return (
        <div className="h-[500vh]">
            Video Parallax
        </div>
    );
};

export default VideoParallax;
