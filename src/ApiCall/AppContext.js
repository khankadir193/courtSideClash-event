import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ApiContext = createContext();
const baseUrl = "http://test.streamkar.tv";

// Custom hook to use the context
export const useApi = () => useContext(ApiContext);

// AppContext component
const AppContext = ({ children }) => {
  const [lbData, setLbData] = useState();

  async function getTalentWeeklyPrev(weekIndex) {
    await fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${
        weekIndex - 1
      }&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({
          ...prevState,
          talenWeeklyPrev: res?.data?.list,
        }));
      });
  }

  // Value to be passed to provider
  const value = {
    getTalentWeeklyPrev,
    lbData
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
