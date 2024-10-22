export const sortTickets = (tickets, sortBy) => {
  switch (sortBy) {
    case 'title':
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    
    case 'priority':
      return tickets.sort((a, b) => b.priority - a.priority);
    
    default:
      return tickets; 
  }
};

export const sortGrouping = (ticketGroups, sortBy) => {
  const entries = Object.entries(ticketGroups);
  
  const sortedEntries = entries.sort((a, b) => {
    const groupA = a[1];
    const groupB = b[1];
    
    if (sortBy === 'priority') {
      return groupB.priority - groupA.priority;
    } else if (sortBy === 'title') {
      return groupA.title.localeCompare(groupB.title);
    }
    return 0;
  });

  return sortedEntries.reduce((acc, [key, value], index) => {
    acc[index] = { ...value, originalKey: key };
    return acc;
  }, {});
};