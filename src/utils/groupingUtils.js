export const groupTicketsByStatus = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    const { status } = ticket;
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(ticket);
    return groups;
  }, {});
};

export const groupTicketsByUser = (tickets, users) => {
  return tickets.reduce((groups, ticket) => {
    const assignedUser = users.find((user) => user.id === ticket.assignedTo);
    const userName = assignedUser ? assignedUser.name : 'Unassigned';
    if (!groups[userName]) {
      groups[userName] = [];
    }
    groups[userName].push(ticket);
    return groups;
  }, {});
};

export const groupTicketsByPriority = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    const { priority } = ticket;
    if (!groups[priority]) {
      groups[priority] = [];
    }
    groups[priority].push(ticket);
    return groups;
  }, {});
};