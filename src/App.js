import React from 'react';
import './App.css';
import HeaderComp from './components/HeaderComp';
import UserComp from './components/UserComp';
import TabComponent from './components/TabComponent';
import AppContext from './ApiCall/AppContext';
import { FieldGoalMilestone } from './components/FieldGoalMilestone';
// const { getTalentWeeklyPrev,lbData } = useApi();


function App() {
  return (
      <div className='App'>
        <HeaderComp />
        <FieldGoalMilestone />
      {/* <pre>{JSON.stringify(lbData, null, 2)}</pre> */}
      </div>

  );
}

export default () => (
  <AppContext>
    <App />
  </AppContext>
);

