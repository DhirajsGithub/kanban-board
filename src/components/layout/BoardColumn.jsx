import React from 'react';
import './BoardColumn.css';  // Importing the CSS for column styles
import TicketCard from '../board/TicketCard';

const BoardColumn = ({ title, tickets, users }) => {
  return (
    <div className="board-column">
      <div className="column-header">
        <h2>{title}</h2> 
        <span>{tickets.length} tasks</span> {/* Showing the number of tasks in this status */}
      </div>

      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} users={users} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
