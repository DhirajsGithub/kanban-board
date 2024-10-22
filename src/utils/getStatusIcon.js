import todoIcon from "../assets/icons/To-do.svg";
import inProgressIcon from "../assets/icons/in-progress.svg";
import doneIcon from "../assets/icons/Done.svg";
import canceledIcon from "../assets/icons/Cancelled.svg";
import backlogIcon from "../assets/icons/Backlog.svg";

const normalizeString = (str) => {
  return str.replace(/\s+/g, '').toLowerCase();
};

export const getStatusIcon = (status) => {
  const normalizedStatus = normalizeString(status);

  if (normalizedStatus === 'todo') {
    return { src: todoIcon, alt: 'Todo' };
  } else if (normalizedStatus === 'inprogress') {
    return { src: inProgressIcon, alt: 'In progress' };
  } else if (normalizedStatus === 'done') {
    return { src: doneIcon, alt: 'Done' };
  } else if (normalizedStatus === 'canceled' || normalizedStatus === 'cancelled') {
    return { src: canceledIcon, alt: 'Cancelled' };
  } else if (normalizedStatus === 'backlog') {
    return { src: backlogIcon, alt: 'Backlog' };
  }
};
