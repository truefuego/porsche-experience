import React, { useState } from 'react'
import RotatingText from './ui-elements/RotatingText'
import { ArrowBottomIcon } from '../assets/icons/icons'
import { IScrollToSectionButtonProps } from './type'
import { motion } from 'framer-motion';

const ScrollToSectionButton:React.FC<IScrollToSectionButtonProps> = ({ componentRef, texts }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const toggleHovering = () => {
        setIsHovering(prev => !prev);
    };

  return (
    <div className="fixed flex items-center justify-center cursor-pointer bottom-0 left-0 z-10" onClick={() => componentRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" })} onMouseEnter={toggleHovering} onMouseLeave={toggleHovering} >   
        <motion.div 
            className={`bg-[#f00] flex h-12 w-12 items-center justify-center ${isHovering ? 'pt-4' : ''} duration-500 transition-all ease-in-out z-10`}
        >
            <ArrowBottomIcon />
        </motion.div>
        <RotatingText
            texts={texts}
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            mainClassName='pointer-events-none z-10 px-6'
            exit={{ y: "-120%" }}
            staggerDuration={0.01}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={5000}
        />
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#f00] z-0"
          initial={{ width: "0%" }}
          animate={{ width: isHovering ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
    </div>
  )
}

export default ScrollToSectionButton