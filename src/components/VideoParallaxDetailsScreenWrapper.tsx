import React, { useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { IVideoParallaxDetailsScreenWrapperProps } from './type';

const VideoParallaxDetailsScreenWrapper: React.FC<IVideoParallaxDetailsScreenWrapperProps> = ({ classes, children, scrollYProgress, index, isModalOpen, setModalOpen, isLast= false }) => {
  const start = index / 8;
  const end = (index + 1) / 8;

  const indexOffset = index === 0;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - (isLast ? .01 : 0.05), end], [Number(indexOffset), 1, Number(!indexOffset), 0]);
  const zIndex = opacity.get() > 0.1 ? 0 : -1;
  
  useEffect(() => {
    if (isModalOpen && zIndex !== 0) {
      setModalOpen?.(false);
    }
  }, [isModalOpen, setModalOpen, zIndex]);

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
