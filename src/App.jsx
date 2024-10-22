import React, {useRef} from 'react';
import { BoardProvider } from './context/BoardContext';
import Header from './components/layout/Header';
import './App.css';
import KanbanBoard from './pages/KanbanBoard';

const App = () => {
  const headerRef = useRef();
  const handleKanbanBoardClick = () => {
    headerRef.current.closeDropDown()
  }
  return (
    <BoardProvider>
      <div className="app">
        <div className='sticky-header'>
        <Header ref={headerRef} />
        </div>
        <main className="main-content">
          <KanbanBoard handleKanbanBoardClick={handleKanbanBoardClick} />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
