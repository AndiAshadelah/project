import React from 'react';

export const ImageCard = ({ imageUrl, altText = "image", title, description }) => {
    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg h-[36rem] flex flex-col">
        <div className="relative w-full h-[25rem] flex-shrink-0">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Kontainer teks dibuat flex agar bisa memposisikan konten di tengah secara vertikal dan horizontal */}
        <div className="p-4 flex-1 flex flex-col justify-center items-center text-center overflow-y-auto">
          <h2 className="mb-2 text-xl font-bold text-gray-800 font-poppins">
            {title}
          </h2>
          <p className="text-gray-700 font-poppins leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  };

export default ImageCard;