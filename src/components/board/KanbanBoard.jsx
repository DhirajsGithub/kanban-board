import React from 'react';
import { useBoardContext } from '../../context/BoardContext';
import BoardColumn from '../layout/BoardColumn';
import { groupTicketsByStatus, groupTicketsByUser, groupTicketsByPriority } from '../../utils/groupingUtils';
import { sortTickets } from '../../utils/sortingUtils';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const { tickets, users, groupBy, sortBy, loading, error } = useBoardContext();
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  let groupedTickets;
  switch (groupBy) {
    case 'user':
      groupedTickets = groupTicketsByUser(tickets, users);
      break;
    case 'priority':
      groupedTickets = groupTicketsByPriority(tickets);
      break;
    default:
      groupedTickets = groupTicketsByStatus(tickets);
  }

  Object.keys(groupedTickets).forEach(key => {
    groupedTickets[key] = sortTickets(groupedTickets[key], sortBy);
  });

  console.log(groupedTickets)


  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <BoardColumn
          key={key}
          title={key}
          tickets={tickets}
          users={users}
          groupBy={groupBy}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;