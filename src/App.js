import React, { useState, useEffect, createContext, } from 'react';
import './App.css';
import HeaderComp from './components/HeaderComp';
import UserComp from './components/UserComp';
import TabComponent from './components/TabComponent';
import AppContext from './ApiCall/AppContext';
// const { getTalentWeeklyPrev,lbData } = useApi();


function App() {
  return (
      <div>
        <HeaderComp />
        <TabComponent />
      {/* <pre>{JSON.stringify(lbData, null, 2)}</pre> */}

      </div>

  );
}

export default () => (
  <AppContext>
    <App />
  </AppContext>
);

