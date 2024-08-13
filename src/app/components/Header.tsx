import React from 'react';
import Sparkle from './icons/Sparkle';
const Header: React.FC = () => {
      return (
            <header className="w-full h-[120px] left-0 top-0 bg-transparent fixed box-border z-[1000] pointer-events-none transition-all duration-[0s] ease-in-out delay-[0s]">
                  <div className="box-border h-full py-18 px-20 mx-auto relative w-full flex justify-between items-center">
                        <div className="text-white text-3xl font-bold ">
                              <Sparkle />

                        </div>
                        <div className="text-white pointer-events-auto">
                              <button className="text-white hover:text-gray-400">Menu</button>
                        </div>
                  </div>
            </header>
      );
};

export default Header;