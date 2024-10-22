import React, { forwardRef, useImperativeHandle, useState } from 'react';
import displayIcon from '../../assets/icons/Display.svg';
import downChevron from '../../assets/icons/down.svg';
import { useBoardContext } from '../../context/BoardContext';
import './Header.css';

const Header = forwardRef((props, ref) => {
  const { groupBy, setGroupBy, sortBy, setSortBy } = useBoardContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  };
  useImperativeHandle(ref, () => ({

    closeDropDown() {
      setIsDropdownOpen(false)
    }

  }));

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
              onChange={(e) => {
                if(e.target.value === 'priority') {
                  setSortBy('priority')
                }
                setIsDropdownOpen(false)
                setGroupBy(e.target.value)
              }}
              className="select-input"
            >
              <option value="status">Status &nbsp; &nbsp; &nbsp;</option>
              <option value="user">User &nbsp; &nbsp; &nbsp;</option>
              <option value="priority">Priority &nbsp; &nbsp; &nbsp;</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sortBy} 
              onChange={(e) => {
                setIsDropdownOpen(false)
                setSortBy(e.target.value)
              }}
              className="select-input"
            >
              <option value="priority">Priority &nbsp; &nbsp; &nbsp;</option>
              <option value="title">Title &nbsp; &nbsp; &nbsp;</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;