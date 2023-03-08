import React from 'react';
import Board from './components/Board';

export default function App() {
  return (
    <div className='game-wrapper'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'></div>
    </div>
  );
}
