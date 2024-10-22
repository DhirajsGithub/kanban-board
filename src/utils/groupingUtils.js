import {defaultImgUrl} from "../constants/defaultImageConstants";
import {PRIORITY_OPTIONS} from "../constants/priorityConstants";
import {STATUS_OPTIONS} from "../constants/statusConstants";
import {getPriorityIcon} from "./getPriorityIcon";
import {getStatusIcon} from "./getStatusIcon";

export const groupTicketsByStatus = (tickets) => {
  const groups = Object.values(STATUS_OPTIONS).reduce((acc, status) => {
    acc[status] = {
      title: status, 
      image: getStatusIcon(status)?.src,
      tickets: [] 
    };
    return acc;
  }, {});
  tickets.forEach((ticket) => {
    const { status } = ticket;
    if (groups[status]) {
      groups[status].tickets.push(ticket);
    }
  });

  return groups;
};

export const groupTicketsByUser = (tickets, users) => {
  return tickets.reduce((groups, ticket) => {
    const assignedUser = users.find((user) => user.id === ticket.userId);
    const userName = assignedUser ? assignedUser.name : 'Unassigned';
    const userImage = assignedUser?.image ? assignedUser.image : defaultImgUrl; 
    if (!groups[userName]) {
      groups[userName] = {
        title: userName,   
        image: userImage,  
        tickets: [],
        available: assignedUser?.available,
        isUser: true       
      };
    }
    groups[userName].tickets.push(ticket);
    return groups;
  }, {});
};

export const groupTicketsByPriority = (tickets) => {
  const groups = Object.values(PRIORITY_OPTIONS).reduce((acc, priorityOption) => {
    const { label, value } = priorityOption;
    acc[value] = {
      title: label, 
      image: getPriorityIcon(value, true)?.src,
      tickets: [],
      priority: value
    };
    return acc;
  }, {});
  tickets.forEach((ticket) => {
    const { priority } = ticket;
    if (groups[priority]) {
      groups[priority].tickets.push(ticket); // Add ticket to the correct priority group
    }
  });

  return groups;
};