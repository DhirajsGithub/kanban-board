import React from 'react';
import { BoardProvider } from './context/BoardContext';
import Header from './components/layout/Header';
import KanbanBoard from './components/board/KanbanBoard';
import './styles/global.css';

const App = () => {
  return (
    <BoardProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <KanbanBoard />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
