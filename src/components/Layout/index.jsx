import React from 'react';
import { Player } from '../Player';
import './styles.scss';

export const Layout = ({ children }) => {
  return (
    <main className='layout'>
      { children }
      <Player audio='/destino-o-casualidad.mp3' />
    </main>
  );
}