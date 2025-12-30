import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowLeft, MessageCircle } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import config from "./config";

// IMPORT ASSET LANGSUNG (Agar tidak layar putih)
import fireworks from "../assets/fireworks.gif"; 
import cute from "../assets/cute.gif"; 

function Closing() {
  const navigate = useNavigate();
  const cuteRef = useRef(null); // Ref untuk animasi GIF
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (cuteRef.current) {
      gsap.fromTo(
        cuteRef.current,
        { opacity: 0, scale: 0.5, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "6285143645159"; 
    const message = `Halo! Saya memberikan rating ${rating} bintang untuk websitenya. Terpaku sama pesannya: ${config.closingMessage}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center font-poppins">
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Fireworks background */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${fireworks})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Cute GIF Section */}
        <div className="z-10 mb-4">
          <img
            ref={cuteRef}
            src={cute}
            alt="Cute Animation"
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="w-[90%] max-w-[400px] z-10 text-center">
          <h2 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
            How was it?
          </h2>
          <p className="text-white/80 text-sm mb-6 px-4">
            Menurutmu webnya gimana nih? kasih rating biar aku tahu kesan kamu setelah menjelajahi semua isi web ini
          </p>

          {/* Star Rating System */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-3xl transition-all duration-200 transform ${
                  star <= (hover || rating) ? "scale-125" : "scale-100"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <span className={`${star <= (hover || rating) ? "text-yellow-400" : "text-gray-400"}`}>
                  ★
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-4 px-6">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              disabled={rating === 0}
              className={`w-full py-3 flex justify-center items-center gap-3 rounded-full font-semibold transition-all shadow-lg ${
                rating > 0 
                ? "bg-green-500 hover:bg-green-600 text-white" 
                : "bg-gray-500/50 text-white/50 cursor-not-allowed"
              }`}
            >
              <MessageCircle className="w-5 h-5" /> Kirim ke WhatsApp
            </button>

            {/* Back Button */}
            <button
              className="w-full py-3 flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm border border-white/30 rounded-full transition-all"
              onClick={() => navigate('/letter')}
            >
              <ArrowLeft className="w-4 h-4" /> {config.previousPageText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Closing;