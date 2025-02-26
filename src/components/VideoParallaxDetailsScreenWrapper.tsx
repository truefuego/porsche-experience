import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IVideoParallaxDetailsScreenWrapperProps } from './type';

const VideoParallaxDetailsScreenWrapper: React.FC<IVideoParallaxDetailsScreenWrapperProps> = ({ classes, children, offset = 0.8 }) => {
  const controls = useAnimation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = wrapperRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const threshold = window.innerHeight * offset;
        if (rect.bottom < threshold) {
          controls.start({ opacity: 0, transition: { duration: 0.2 } });
        } else {
          controls.start({ opacity: 1, transition: { duration: 0.2 } });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, offset]);

  return (
    <motion.div
      ref={wrapperRef}
      className={"h-screen text-white flex items-center justify-center" + ` ${classes}`}
      style={{ opacity: 1 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default VideoParallaxDetailsScreenWrapper;
