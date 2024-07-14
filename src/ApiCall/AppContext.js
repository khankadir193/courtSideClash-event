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

  let day = date.getUTCDate();

  let months = date.getUTCMonth() + 1;
  let years = date.getUTCFullYear();

  day = day < 10 ? `0${day}` : day;
  months = months < 10 ? `0${months}` : months;
  let dateStr = years + "-" + months + "-" + day;

  async function getTalentWeeklyPrev(weekIndex) {
    await fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex - 1
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

  async function getTalentDailyPrev() {
    await fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({
          ...prevState,
          talenDailyPrev: res?.data?.list,
        }));
      });
  }

  async function getTalentOverall() {
    await fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({
          ...prevState,
          talentOverall: res?.data?.list,
        }));
      });
  }

  // Value to be passed to provider
  const value = {
    getTalentWeeklyPrev,
    lbData,
    getTalentDailyPrev,
    getTalentOverall
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
