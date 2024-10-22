export const sortTickets = (tickets, sortBy) => {
    switch (sortBy) {
      case 'date':
        return tickets.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'priority':
        const priorityOrder = { 'Urgent': 1, 'High': 2, 'Medium': 3, 'Low': 4 };
        return tickets.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      default:
        return tickets; // Return unsorted if sortBy doesn't match
    }
  };