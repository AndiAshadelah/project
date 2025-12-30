import React, { useState, useRef, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Closing, Letter, Passcode, Question, Recap, Timer, Message, Music, Picture } from './components'
import './index.css'

export const MusicContext = createContext();

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Autoplay memerlukan interaksi user di page sebelumnya."));
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, playMusic }}>
      <Router>
        {/* Audio tetap hidup di sini meskipun page berganti */}
        <audio ref={audioRef} src="/music.flac" loop />
        
        <Routes>
          <Route path="/" element={<Passcode />} />
          <Route path="/question" element={<Question />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/recap" element={<Recap />} />
          <Route path="/recap/message" element={<Message />} />
          <Route path="/recap/music" element={<Music />} />
          <Route path="/recap/pictures" element={<Picture />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/closing" element={<Closing />} />
        </Routes>
      </Router>
    </MusicContext.Provider>
  )
}

export default App;