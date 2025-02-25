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
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-3xl">Next Section</h1>
      </div>
    </div>
  )
}

export default App;
