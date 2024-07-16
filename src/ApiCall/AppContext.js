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
    talentWeeklyPrev: [],
    talentDailyPrev: [],
    talentDaily: [],
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
  const dateStrPrev = `${years}-${months}-${(day - 1).toString().padStart(2, '0')}`;

  // Function to fetch leaderboard data and update state
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

  // Individual functions for each type of data fetch
  const getTalentWeeklyPrev = (weekIndex) => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex - 1}&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`, 'talentWeeklyPrev');
  };

  const getTalentDailyPrev = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStrPrev}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`, 'talentDailyPrev');
  };

  const getTalentOverall = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20`, 'talentOverall');
  };

  const getTalentWeekly = (weekIndex) => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex}&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`, 'talentWeekly');
  };

  const getWeeklyUserPrev = (weekIndex) => {
    // This is a dummy API for testing purposes
    fetchData('http://test.streamkar.tv/api/activity/eidF/getLeaderboardInfoV2?dayIndex=2024-07-14&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20', 'userWeeklyPrev');
  };

  const getUserDailyPrev = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStrPrev}&eventDesc=20240726_court&rankIndex=17&pageNum=1&pageSize=20`, 'userDailyPrev');
  };

  const getTalentDaily = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`, 'talentDaily');
  };

  const getUserDaily = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=17&pageNum=1&pageSize=20`, 'userDaily');
  };

  // useEffect to call the API functions on mount
  useEffect(() => {
    getTalentWeeklyPrev(1); // example weekIndex
    getTalentDailyPrev();
    getTalentOverall();
    getWeeklyUserPrev(1);
    getTalentDaily();
    getUserDaily();
    getUserDailyPrev();
    getTalentWeekly(0);
  }, []);

  const value = {
    lbData,
    getTalentWeeklyPrev,
    getTalentDailyPrev,
    getTalentOverall,
    getWeeklyUserPrev,
    getTalentDaily,
    getUserDaily,
    getUserDailyPrev,
    getTalentWeekly,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
