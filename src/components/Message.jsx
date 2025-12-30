import React from 'react';
import Carousel from './Carousel';
import { TextCard } from './TextCard'; // Pastikan import TextCard benar
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config'; // Import config file

function Message() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          {config.messageTitle}
        </h1>
        <Carousel>
          {config.messageGallery.map((item, index) => (
            <TextCard
              key={index} // Tambahkan key untuk list
              title={item.title}
              description={item.description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;