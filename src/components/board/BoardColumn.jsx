import React from 'react';
import './BoardColumn.css';  
import TicketCard from '../board/TicketCard';
import threeDotsIcon from '../../assets/icons/3 dot menu.svg';
import addIcon from '../../assets/icons/add.svg';
import UserAvatar from '../common/UserAvatar';

const BoardColumn = ({ title, tickets, users, image, available, isUser }) => {
  const findUser = (id) => users.find((user) => user.id === id);
  return (
    <div className="board-column">
      <div className="column-header">
        <div className='img-title-row'>
        {isUser && <div style={{transform: "scale(0.9)"}} >
            <UserAvatar img={title} available={available} />
          </div>}
          {!isUser && <img 
             style={{transform: "scale(0.7)"}}
              src={image} 
              alt={title}
              className="avatar"
            />}
        <h2>{title}</h2> 
        <span>{tickets.length}</span>
        </div>
            <div className='img-title-row'>
              <img onClick={()=> alert("Menu")} className='buttons-col' src={threeDotsIcon} alt="" />
              <img onClick={()=> alert("Add")} className='buttons-col' src={addIcon} alt="" />
            </div>
      </div>

      <div className="ticket-list">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} user={findUser(ticket.userId)} />
        ))}
      </div>
    </div>
  );
};

export default BoardColumn;
