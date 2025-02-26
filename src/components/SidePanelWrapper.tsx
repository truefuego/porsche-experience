import React from 'react'
import { ISidePanelWrapperProps } from './type';
import { CrossIconThin } from '../assets/icons/icons';

const SidePanelWrapper:React.FC<ISidePanelWrapperProps> = ({ children, isVisible, setIsVisible, classes }) => {
  return (
    <div className={`fixed top-0 right-0 h-screen text-white flex flex-col items-start justify-end transition-all duration-300 ${isVisible ? ' w-screen' : 'w-0'} ${classes}`}>
      <div className='absolute w-screen h-screen cursor-pointer' onClick={() => setIsVisible(false)} />
      <div className={`absolute h-screen transition-all right-0 bg-amber-50 duration-200 z-10 delay-100 ${isVisible ? 'w-screen md:w-[70%]' : 'w-0'}`}>
        <div onClick={() => setIsVisible(false)} className='cursor-pointer m-8'>
          <CrossIconThin />
        </div>
        <div className={`mt-8 ml-8 ${isVisible ? 'block': 'hidden'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SidePanelWrapper;
