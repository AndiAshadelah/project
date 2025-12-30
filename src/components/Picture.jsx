import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { ImageCard } from './ImageCard';
import { ArrowLeft } from './icons';
import { useNavigate } from 'react-router-dom';
import config from './config';

// 1. Ubah ekstensi ke .jpeg atau .jpg (atau gunakan * untuk keduanya)
const imageFiles = import.meta.glob('../assets/Picture*.{jpeg,jpg}', { eager: true });

function Picture() {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const paths = Object.keys(imageFiles);

    const loadedImages = paths
      .sort((a, b) => {
        // 2. Sesuaikan regex untuk mencari angka di file .jpeg atau .jpg
        const aNum = parseInt(a.match(/Picture(\d+)\.(jpeg|jpg)/)?.[1] || 0, 10);
        const bNum = parseInt(b.match(/Picture(\d+)\.(jpeg|jpg)/)?.[1] || 0, 10);
        return aNum - bNum;
      })
      .slice(0, config.pictureGallery.length)
      .map((path, index) => {
        return {
          Image: imageFiles[path].default,
          title: config.pictureGallery[index]?.title || 'No Title',
          description: config.pictureGallery[index]?.description || 'No Description',
        };
      });

    setPictures(loadedImages);
  }, []);

  return (
    <div className="min-h-screen bg-black/40 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px] py-8">
        <h1 className="text-2xl font-bold mb-6 drop-shadow-lg text-white text-center font-poppins">
          {config.pictureTitle}
        </h1>

        {pictures.length > 0 ? (
          <Carousel>
            {pictures.map(({ Image, title, description }, index) => (
              <ImageCard
                key={index}
                imageUrl={Image}
                altText={`Picture ${index + 1}`}
                title={title}
                description={description}
              />
            ))}
          </Carousel>
        ) : (
          <div className="h-[36rem] flex items-center justify-center border-2 border-dashed border-white/20 rounded-lg">
             <p className="text-white/50 animate-pulse">Memuat Gambar...</p>
          </div>
        )}

        <div className="flex justify-center w-full mt-10">
          <button
            className="px-6 py-2 flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 transition-all gap-2"
            onClick={() => navigate(config.recapRedirectPath)}
          >
            <ArrowLeft /> {config.previousPageText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;