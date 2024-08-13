"use client"
import React from 'react';


type HeroBlurProps = {
      imageSrc: string;
      title: string;
      year: string;
    };

const HeroImage: React.FC<HeroBlurProps> = ({ imageSrc, title, year }) => {

      return (
            <div key="imageBanner" className="relative top-0 w-full h-full br rounded-xl z-50">
                  <img
                        src={imageSrc}
                        alt="White Liners"
                        className="w-full h-full object-cover br rounded-xl"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end items-center p-8 text-white br rounded-xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">{title}</h1>
                        <div className="flex justify-between w-full max-w-screen-xl">
                              <span className="text-sm md:text-lg bg-gray-800 px-3 py-1 rounded-full">{title}</span>
                              <span className="text-sm md:text-lg bg-gray-800 px-3 py-1 rounded-full">Photo</span>
                        </div>

                  </div>

                  

            </div>

      );
};

export default HeroImage;