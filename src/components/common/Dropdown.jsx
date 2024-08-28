import React, { useState } from "react";
import DownArrow from "../../assets/icons/DownArrow.svg";
import "./style.css";
import { statusMap } from "../../utils/status";

const StatusDropdown = ({ options, value, onSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (status) => {
    setDropdownOpen(false);
    if (onSelect) {
      onSelect(status);
    }
  };

  return (
    <div className="status-dropdown" onClick={toggleDropdown}>
      <div className="status-display">
        <div key={value} className="flex center g-1">
          <div className={`status ${value}`} />
          {statusMap[value]}
        </div>
        <span className={`arrow ${dropdownOpen ? "rotate-180" : ""}`}>
          <img src={DownArrow} alt="arrow" />
        </span>
      </div>
      {dropdownOpen && (
        <div className="dropdown-content">
          {options.map(({ name, value }) => (
            <div
              key={value}
              className="flex center status-option g-1"
              onClick={() => handleSelect(value)}
            >
              <div className={`status ${value}`} />
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
