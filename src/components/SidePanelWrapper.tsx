import React from 'react'
import { ISidePanelWrapperProps } from './type';
import { CrossIconThin } from '../assets/icons/icons';

const SidePanelWrapper:React.FC<ISidePanelWrapperProps> = ({ children, isVisible, setIsVisible, classes }) => {
  return (
    <div className={`fixed top-0 right-0 h-screen bg-amber-50 text-white flex flex-col items-start justify-start transition-all duration-300 ${isVisible ? 'w-[70%]' : 'w-0'} ${classes}`}>
        <div onClick={() => setIsVisible(false)} className={`p-4 m-4 cursor-pointer transition-all duration-300 delay-100 ${isVisible ? 'block' : 'hidden'}`}>
          <CrossIconThin />
        </div>
        <div className={`transition-all pt-8 pl-8 duration-300 delay-100 ${isVisible ? 'block' : 'hidden'}`}>
          {children}
        </div>
    </div>
  )
}

export default SidePanelWrapper;
