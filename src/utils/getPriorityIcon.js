import noPriority from '../assets/icons/No-priority.svg';
import lowPriority from '../assets/icons/Img - Low Priority.svg';
import mediumPriority from '../assets/icons/Img - Medium Priority.svg';
import highPriority from '../assets/icons/Img - High Priority.svg';
import urgentPriority from '../assets/icons/SVG - Urgent Priority grey.svg';
import urgentColorPriority from "../assets/icons/SVG - Urgent Priority colour.svg";

export const getPriorityIcon = (priority, colorUrgent=false) => {
  switch (priority) {
    case 4:
      return { src: colorUrgent ? urgentColorPriority :  urgentPriority, alt: 'Urgent', className: 'priority-icon urgent' };
    case 3:
      return { src: highPriority, alt: 'High', className: 'priority-icon high' };
    case 2:
      return { src: mediumPriority, alt: 'Medium', className: 'priority-icon medium' };
    case 1:
      return { src: lowPriority, alt: 'Low', className: 'priority-icon low' };
    case 0:
      return { src: noPriority, alt: 'No priority', className: 'priority-icon no-priority' };
  }
};