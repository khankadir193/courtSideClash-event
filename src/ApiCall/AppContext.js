import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ApiContext = createContext();
const baseUrl = "http://test.streamkar.tv";

// Custom hook to use the context
export const useApi = () => useContext(ApiContext);

// AppContext component
const AppContext = ({ children }) => {
  const [lbData, setLbData] = useState({
    talentOverall: [],
    talentWeekly: [],
    talenWeeklyPrev: [],
    talenDailyPrev: [],
    talenDaily: [],

    userWeekly: [],
    userOverall: [],
    userDaily: [],
    userWeeklyPrev: [],
    userDailyPrev: [],
    weeklyTeamUserRanking: [],
    overallTeamUsersRanking: [],
  });

  const date = new Date();
  const day = date.getUTCDate().toString().padStart(2, '0');
  const months = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const years = date.getUTCFullYear();
  const dateStr = `${years}-${months}-${day}`;

  const fetchData = async (url, key) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLbData(prevState => ({
        ...prevState,
        [key]: data?.data?.list || [],
      }));
    } catch (error) {
      console.error(`Failed to fetch ${key}:`, error);
    }
  };

  const getTalentWeeklyPrev = (weekIndex) => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex - 1}&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`, 'talenWeeklyPrev');
  };

  const getTalentDailyPrev = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`, 'talenDailyPrev');
  };

  const getTalentOverall = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20`, 'talentOverall');
  };

  function getWeeklyUserPrev(weekIndex) {
    //this api is wrong/dummy api for testing
    fetch('http://test.streamkar.tv/api/activity/eidF/getLeaderboardInfoV2?dayIndex=2024-07-14&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20')
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({
          ...prevState,
          userWeeklyPrev: res?.data?.list,
        }));
      });
  }

  useEffect(() => {
    getTalentWeeklyPrev(1); // example weekIndex
    getTalentDailyPrev();
    getTalentOverall();
    getWeeklyUserPrev(1);
  }, [0]);

  const value = {
    getTalentWeeklyPrev,
    lbData,
    getTalentDailyPrev,
    getTalentOverall,
    getWeeklyUserPrev
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
