import React from 'react';
import noPriority from '../../assets/icons/No-priority.svg';
import lowPriority from '../../assets/icons/Img - Low Priority.svg';
import mediumPriority from '../../assets/icons/Img - Medium Priority.svg';
import highPriority from '../../assets/icons/Img - High Priority.svg';
import urgentPriority from '../../assets/icons/SVG - Urgent Priority grey.svg';
import './TicketCard.css';

const TicketCard = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return <img src={urgentPriority} alt="Urgent" className="priority-icon urgent" />;
      case 3: return <img src={highPriority} alt="High" className="priority-icon high" />;
      case 2: return <img src={mediumPriority} alt="Medium" className="priority-icon medium" />;
      case 1: return <img src={lowPriority} alt="Low" className="priority-icon low" />;
      default: return <img src={noPriority} alt="No priority" className="priority-icon no-priority" />;
    }
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <img 
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
              alt={user.name}
              className={`avatar ${!user.available ? 'unavailable' : ''}`}
            />
            <span className={`status-dot ${user.available ? 'available' : ''}`} />
          </div>
        )}
      </div>

      <div className="ticket-title">
        <h3>{ticket.title}</h3>
      </div>

      <div className="ticket-footer">
        {getPriorityIcon(ticket.priority)}
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            <div className="tag-circle" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;