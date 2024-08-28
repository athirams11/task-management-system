import React, { useState } from 'react';
import DownArrow from '../../assets/icons/DownArrow.svg'
import './style.css'

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item pointer">
      <div className="accordion-title flex center sb p-10" onClick={() => setIsActive(!isActive)}>
        <div className='typography'>
            {title}
        </div>
        <div className={`flex center mr-5 ${isActive ? 'rotate-180'  : ''}`}>
            <img src={DownArrow} alt="arrow" />
        </div>
      </div>
      {isActive && <div className="mb-10">{children}</div>}
    </div>
  );
};

export default Accordion;