import React, { useState, useEffect, createContext, } from 'react';
import './App.css';
import HeaderComp from './components/HeaderComp';
import UserComp from './components/UserComp';
import TabComponent from './components/TabComponent';

export const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider>
      <div>
        <HeaderComp />
        <TabComponent />
      </div>
    </AppContext.Provider>

  );
}

export default App;

