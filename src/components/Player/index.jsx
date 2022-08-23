import React, { useEffect, useRef } from "react";
import { useAudio } from "../../hooks/useAudio";
import { ImPause2 as Pause, ImPlay3 as Play } from 'react-icons/im';
import './styles.scss';

export const Player = ({ audio }) => {
  const {isPlaying, toggle} = useAudio(audio);
  const PlayerIcon = !isPlaying ? Play : Pause;

  return (
    <div className="player">
      <button className="action" onClick={toggle}>
        <PlayerIcon />
      </button>
    </div>
  );
};
