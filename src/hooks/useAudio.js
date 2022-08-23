import { useState, useEffect } from "react";

export const useAudio = url => {
  const [ audio ] = useState(new Audio(url));
  const [ isPlaying, setIsPlaying ] = useState(true);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    isPlaying ? audio?.play() : audio?.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isPlaying,
    toggle
  };
};