import { useState, useEffect } from "react";

export const useAudio = url => {
  const [ audio ] = useState(new Audio(url));
  const [ isPlaying, setIsPlaying ] = useState(false);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => audio && isPlaying ? audio?.play() : audio?.pause(), 100);
  }, [isPlaying, audio]);

  return {
    isPlaying,
    toggle
  };
};