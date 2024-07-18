import React, { createContext, useContext, useState, useEffect } from 'react';
import {allTeams,testUserId} from './ApiComp';

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
  const [marqueeData, setMarqueeData] = useState({
    game: [],
    milestone: [],
  });
  const [showSuccessAttemptPopUp, setShowSucessAttemptPopUp] = useState(false);
  const [userInfo, setUserInfo] = useState({
    throwsLeft: 0,
    weekIndex: 0,
    weeklyBeansPot: {},
    dailyScore: 0,
    weeklyScore: 0,
    teamIndex: 0,
    teamId: 0,
  });
  const [currentUser, setCurrentUser] = useState({
    userId: 0,
    userToken: "",
  });
  const [milestonePopUp, setMilestonePopUp] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const date = new Date();
  const day = date.getUTCDate().toString().padStart(2, '0');
  const months = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const years = date.getUTCFullYear();
  const dateStr = `${years}-${months}-${day}`;
  const dateStrPrev = `${years}-${months}-${(day - 1).toString().padStart(2, '0')}`;

  //marquee data
  function getGameMarqueeData() {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240726_court&rankIndex=1&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setMarqueeData((prevState) => ({ ...prevState, game: res?.data?.list }));
      });
  }

  function getMilestoneMarqueeData() {
    fetch(
      `${baseUrl}/api/activity/eidF/getWinnerRankInfo?eventDesc=20240726_court&rankIndex=2&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setMarqueeData((prevState) => ({ ...prevState, milestone: res?.data?.list }));
      });
  }

  //getUserInfo..
  const getInfo = () => {
    fetch(
      `${baseUrl}/api/activity/courtSide/getUserEventInfo?userId=${currentUser.userId ? currentUser.userId : testUserId}`,
      {
        headers: {
          method: "GET",
          checkTag: "",
          redirect: "follow",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.errorCode === 0) {
          let todayBeanspotValueKey = 'DAILY_USER_' + dateStr;
          let yesterdayBeanspotValueKey = 'DAILY_USER_' + dateStrPrev;
          setUserInfo({
            ...userInfo,
            throwsLeft: res?.data?.gamePoints,
            weekIndex: res?.data?.weekIndex,
            weeklyBeansPot: res?.data?.weeklyBeansPot,
            dailyScore: res?.data?.dailyScore,
            weeklyScore: res?.data?.weeklyScore,
            teamId: res?.data?.teamId,
            todayBeanspotValue: res?.data?.weeklyBeansPot[todayBeanspotValueKey],
            yesterdayBeanspotValue: res?.data?.weeklyBeansPot[yesterdayBeanspotValueKey]
          });


          getWeeklyUser(res.data.weekIndex);
          getWeeklyUserPrev(res.data.weekIndex);
          getTalentWeekly(res.data.weekIndex);
          getTalentWeeklyPrev(res.data.weekIndex);
          // getWeeklyTeamUsers(res.data.weekIndex,res.data.teamId);
          // getOverallTeamUsers(res.data.teamId);
        } else {
          // alert(res.msg);
        }
      })
      .catch((error) => { });
  };

  //pop up function
  const toggleSuccessAttemptPopUp = () => {
    setShowSucessAttemptPopUp((prevState) => !prevState);
  };

  const toggleMilestonePopUp = () => {
    setMilestonePopUp((prev) => !prev);
  };

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

  function getWeeklyTeamUsersPrev(weekIndex, teamId) {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex}_${teamId}&eventDesc=20240726_court&rankIndex=16&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({ ...prevState, weeklyTeamUserRankingPrev: { ...prevState.weeklyTeamUserRankingPrev, [teamId]: res.data.list } }))

      });
  }

  function getWeeklyTeamUsers(weekIndex, teamId) {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex}_${teamId}&eventDesc=20240726_court&rankIndex=16&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({ ...prevState, weeklyTeamUserRanking: { ...prevState.weeklyTeamUserRanking, [teamId]: res.data.list } }))

      });
  }

  function getOverallTeamUser(teamId) {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${teamId}&eventDesc=20240726_court&rankIndex=14&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        setLbData((prevState) => ({ ...prevState, overallTeamUsersRanking: { ...prevState.overallTeamUsersRanking, [teamId]: res.data.list } }))

      });
  }

  // Individual functions for each type of data fetch
  const getTalentDaily = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`, 'talentDaily')
  };

  const getTalentDailyPrev = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStrPrev}&eventDesc=20240726_court&rankIndex=18&pageNum=1&pageSize=20`, 'talentDailyPrev');
  };

  const getTalentWeeklyPrev = (weekIndex) => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex - 1}&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`, 'talentWeeklyPrev');
  };

  const getTalentOverall = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20`, 'talentOverall');
  };

  const getTalentWeekly = (weekIndex) => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex}&eventDesc=20240726_court&rankIndex=12&pageNum=1&pageSize=20`, 'talentWeekly');
  };

  // user api calling 

  const getUserDailyPrev = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStrPrev}&eventDesc=20240726_court&rankIndex=17&pageNum=1&pageSize=20`, 'userDailyPrev');
  };

  const getUserDaily = () => {
    fetchData(`${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${dateStr}&eventDesc=20240726_court&rankIndex=17&pageNum=1&pageSize=20`, 'userDaily');
  };

  const getWeeklyUserPrev = (weekIndex) => {
    // This is a dummy API for testing purposes
    fetchData('http://test.streamkar.tv/api/activity/eidF/getLeaderboardInfoV2?dayIndex=2024-07-14&eventDesc=20240726_court&rankIndex=11&pageNum=1&pageSize=20', 'userWeeklyPrev');
  };

  function getWeeklyUser(weekIndex) {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?dayIndex=${weekIndex}&eventDesc=20240726_court&rankIndex=15&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.data?.list?.length != 0) {
          let sum = 0;
          for (let i = 0; i < res?.data?.list?.length; i++) {
            let Team_Id = res.data.list[i].userId;
            getWeeklyTeamUsers(weekIndex, Team_Id);
            if (res.data.list[i].ranking < 4) {
              sum += res.data.list[i].userScore;
            }
          }
          setLbData((prevState) => ({ ...prevState, weeklyTeamUserRanking: { ...prevState.weeklyTeamUserRanking, topTeamsScore: sum } }))
        }
        setLbData((prevState) => ({
          ...prevState,
          userWeekly: res?.data?.list,
        }));
      });
  }

  function getOverallUsers() {
    fetch(
      `${baseUrl}/api/activity/eidF/getLeaderboardInfoV2?&rankIndex=13&eventDesc=20240726_court&pageNum=1&pageSize=20`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.data?.list?.length != 0) {
          for (let i = 0; i < res?.data?.list?.length; i++) {
            let Team_Id = res.data.list[i].userId;
            getOverallTeamUser(Team_Id);
          }
        }
        setLbData((prevState) => ({
          ...prevState,
          userOverall: res?.data?.list,
        }));
      });
  }


  // useEffect to call the API functions on mount
  useEffect(() => {
    getTalentWeeklyPrev(1); // example weekIndex
    getTalentWeekly(0);
    getTalentDailyPrev();
    getTalentDaily();
    getTalentOverall();
    //user method calling
    getUserDaily();
    getUserDailyPrev();
    getWeeklyUserPrev(1);
    getWeeklyUser(3);
    getOverallUsers();

    //marqueeData
    getGameMarqueeData();

    //this method i need to put condition for userId
    getInfo();
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
    getWeeklyUser,
    getOverallUsers,
    //marquee Data
    marqueeData,
    milesStoneMarquee: marqueeData.milestone,
    //popup methods and state
    toggleSuccessAttemptPopUp: toggleSuccessAttemptPopUp,
    showSuccessAttemptPopUp: showSuccessAttemptPopUp,
    milestonePopUp: milestonePopUp,
    toggleMilestonePopUp: toggleMilestonePopUp,
    isDisabled,
    userInfo: userInfo,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
