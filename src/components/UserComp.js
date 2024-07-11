import React from 'react';
import dailyWeeklyBtn from '../assests/Daily-weekly-btn.png';
import './User.css';
import dailyBtn from '../assests/Daily-btn.png';
import weeklyBtn from '../assests/Weekly-btn.png';
import overAll from '../assests/Overall-btn.png';



const UserComp = () => {
  return (
    <div className='user-container'>
      <div className='user-sub-container'>
        <button>
          <img src={dailyBtn} alt='dailyWeeklyBtn' />
        </button>
        <button>
          <img src={weeklyBtn} alt='dailyWeeklyBtn' />
        </button>
        <button>
          <img src={overAll} alt='dailyWeeklyBtn' />
        </button>
      </div>

    </div>
  );
}

export default UserComp;