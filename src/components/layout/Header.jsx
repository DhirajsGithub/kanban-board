import React, { useState } from 'react';
import displayIcon from '../../assets/icons/Display.svg';
import downChevron from '../../assets/icons/down.svg';
import { useBoardContext } from '../../context/BoardContext';
import './Header.css';

const Header = () => {
  const { groupBy, setGroupBy, sortBy, setSortBy } = useBoardContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="header">
      <div className="display-button" onClick={toggleDropdown}>
        <img src={displayIcon} />
        <span>Display </span>
        <img src={downChevron} />
        
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={groupBy} 
              onChange={(e) => setGroupBy(e.target.value)}
              className="select-input"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="select-input"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;