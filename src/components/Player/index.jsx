import React, { useEffect, useState } from "react";
import { useAudio } from "../../hooks/useAudio";
import { ImPause2 as Pause, ImPlay3 as Play } from 'react-icons/im';
import './styles.scss';
import { useCarousel } from "../../hooks/useCarousel";
import { phrases } from "../../utils/phrases";

export const Player = ({ audio }) => {
  const {isPlaying, toggle} = useAudio(audio);
  const [phrase, setPhrase] = useState('');
  const { resetInstants } = useCarousel();
  const PlayerIcon = !isPlaying ? Play : Pause;

  const shufflePhrase = () => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }

  const handleClick = () => {
    toggle();
    resetInstants();
  }

  useEffect(() => {
    shufflePhrase();
  }, [isPlaying])

  return (
    <div className={`player player-${isPlaying ? 'on' : 'off'}`}>
      <button className="action" onClick={handleClick}>
        <PlayerIcon />
      </button>
      {
        !isPlaying && <p className="text">Reproduce la mágia.. {phrase}.</p>
      }
    </div>
  );
};
