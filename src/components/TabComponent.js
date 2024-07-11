import React, { useState } from 'react';
import UserComp from './UserComp';
import TalentComp from './TalentComp';
import userSelected from '../assests/Users-select-btn.png';
import userUnSelected from '../assests/Users-unselect-btn.png';
import talentSelected from '../assests/Talents-select-btn.png';
import talentUnSelected from '../assests/Talents-unselect-btn.png';
import './Tab.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('user');

  const renderComponent = () => {
    if (activeTab === 'user') {
      return <UserComp />;
    } else if (activeTab === 'talent') {
      return <TalentComp />;
    }
  };

  return (
    <div className='tab-container'>
      <div className='main-tabs'>
        <button className='user' onClick={() => setActiveTab('user')}>
          <img
            src={activeTab === 'user' ? userSelected : userUnSelected}
            alt='User Tab'
          />
        </button>
        <button className='talent' onClick={() => setActiveTab('talent')}>
          <img
            src={activeTab === 'talent' ? talentSelected : talentUnSelected}
            alt='Talent Tab'
          />
        </button>
      </div>

      
      <div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default TabComponent;
