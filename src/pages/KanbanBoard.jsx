import React, { useMemo } from 'react';
import { useBoardContext } from '../context/BoardContext';
import BoardColumn from '../components/board/BoardColumn';
import { groupTicketsByStatus, groupTicketsByUser, groupTicketsByPriority } from '../utils/groupingUtils';
import { sortGrouping, sortTickets } from '../utils/sortingUtils';
import './KanbanBoard.css';
import Loading from '../components/common/Loading';

const KanbanBoard = ({handleKanbanBoardClick}) => {
  const { tickets, users, groupBy, sortBy, loading, error } = useBoardContext();

  const displayGrouping = useMemo(() => {
    if (loading || error || !tickets) return {};

    let grouped;
    switch (groupBy) {
      case 'user':
        grouped = groupTicketsByUser(tickets, users);
        break;
      case 'priority':
        grouped = groupTicketsByPriority(tickets);
        break;
      default:
        grouped = groupTicketsByStatus(tickets);
    }

    if (groupBy === "priority") {
      return sortGrouping(grouped, sortBy);
    }

    const sortedGrouping = Object.entries(grouped).reduce((acc, [key, group]) => {
      acc[key] = {
        ...group,
        tickets: sortTickets([...group.tickets], sortBy)
      };
      return acc;
    }, {});

    return sortedGrouping;
  }, [tickets, users, groupBy, sortBy, loading, error]);

  if (loading) return <div className="loading"><Loading /></div>;
  if (error) return <div className="error">{error}</div>;
  
  return (
    <div onClick={handleKanbanBoardClick} className="kanban-board">
      {Object.entries(displayGrouping).map(([key, group]) => (
        <BoardColumn
          key={key}
          image={group.image}
          title={group.title}
          tickets={group.tickets}
          users={users}
          available={group.available}
          groupBy={groupBy}
          isUser={group.isUser}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;