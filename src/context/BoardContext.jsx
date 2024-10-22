import React, { createContext, useState, useContext, useEffect } from 'react';
import {fetchKanbanBoardData} from '../utils/apiUtils';

const BoardContext = createContext();

export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

export const BoardProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [groupBy, setGroupBy] = useState(() => 
    localStorage.getItem('groupBy') || 'status'
  );
  const [sortBy, setSortBy] = useState(() => 
    localStorage.getItem('sortBy') || 'priority'
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchKanbanBoardData();
        setTickets(data.tickets);
        setUsers(data.users);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const value = {
    tickets,
    users,
    loading,
    error,
    groupBy,
    setGroupBy,
    sortBy,
    setSortBy
  };

  return (
    <BoardContext.Provider value={value}>
      {children}
    </BoardContext.Provider>
  );
};