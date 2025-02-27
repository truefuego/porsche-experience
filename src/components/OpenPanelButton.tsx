import React from 'react'
import { IOpenPanelButtonProps } from './type'
import { ArrowBottomIcon } from '../assets/icons/icons'
import { motion } from 'framer-motion'

const OpenPanelButton:React.FC<IOpenPanelButtonProps> = ({ text, classes, setIsVisible }) => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
  
    const toggleHovering = () => {
        setIsHovering(prev => !prev);   
    }

    return (
        <div onMouseEnter={toggleHovering} onMouseLeave={toggleHovering} onClick={() => setIsVisible(true)} className={`relative flex gep-12 w-fit items-center justify-center cursor-pointer ${classes}`}>
            <div className='bg-[#f00] h-10 w-10 flex items-center justify-center'>
                <div className={`flex ${isHovering ? 'rotate-270' : 'rotate-225'} scale-80 transition-all duration-300 ease-in-out text-white z-10`}>
                    <ArrowBottomIcon />
                </div>
            </div>
            <p className='px-4 hover:pl-2 hover:pr-6 transition-all duration-300 text-white z-10'>{text}</p>
            <motion.div 
                className="absolute left-0 top-0 h-10 bg-[#f00] z-0"
                initial={{ width: "0%" }} 
                animate={{ width: isHovering ? "100%" : "0%" }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </div>
    )   
}

export default OpenPanelButton;
