import React from 'react';
import { BoardProvider } from './context/BoardContext';
import Header from './components/layout/Header';
import './App.css';
import KanbanBoard from './pages/KanbanBoard';

const App = () => {
  return (
    <BoardProvider>
      <div className="app">
        <div className='sticky-header'>
        <Header />
        </div>
        <main className="main-content">
          <KanbanBoard />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
