import React from 'react';
import './App.css';
import HeaderComp from './components/HeaderComp';
import AppContext from './ApiCall/AppContext';
import { FieldGoalMilestone } from './components/FieldGoalMilestone';
import ScrollToTopButton from './components/ScrollToTop';


function App() {
  return (
      <div className='App'>
        <HeaderComp />
        <FieldGoalMilestone />
        <ScrollToTopButton />
        {/* <TickerTape /> */}
      {/* <pre>{JSON.stringify(lbData, null, 2)}</pre> */}
      </div>

  );
}

export default () => (
  <AppContext>
    <App />
  </AppContext>
);

