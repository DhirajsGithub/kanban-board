import React from 'react';
import {useBoardContext} from '../../context/BoardContext';
import './TicketCard.css';
import UserAvatar from '../common/UserAvatar';
import {getPriorityIcon} from '../../utils/getPriorityIcon';

const TicketCard = ({ ticket, user }) => {
  const { groupBy } = useBoardContext();
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && groupBy !== "user" && (
          <UserAvatar img={user.name} available={user.available} />
        )}
      </div>

      <div className="ticket-title">
        <h3>{ticket.title}</h3>
      </div>

      <div className="ticket-footer">
        {groupBy !== "priority" && <img src={getPriorityIcon(ticket.priority)?.src} className="priority-icon" />  }
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