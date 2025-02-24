import React, { useEffect } from "react";
import VideoParallax from "./components/VideoParallax";
import Lenis from "lenis";

const App:React.FC = () => {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])

  return (
    <div>
      <VideoParallax />
      <p className="h-[600vh]">hi</p>
    </div>
  )
}

export default App;
