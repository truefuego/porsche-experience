import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { IVideoParallaxDetailsScreenWrapperProps } from './type';

const VideoParallaxDetailsScreenWrapper: React.FC<IVideoParallaxDetailsScreenWrapperProps> = ({ classes, children, scrollYProgress,  index }) => {
  const start = index / 8;
  const end = (index + 1) / 8;

  const indexOffset = index === 0;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.01, end], [Number(indexOffset), 1, Number(!indexOffset), 0]);
  const zIndex = useTransform(scrollYProgress, [start, end], [-index + 1, 0]);

  return (
    <motion.div
      key={index}
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center ${classes}`}
      style={{
        opacity,
        zIndex,
      }}
    >
      {children}
    </motion.div>
  );
};

export default VideoParallaxDetailsScreenWrapper;
