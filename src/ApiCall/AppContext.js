import React, { createContext, useContext, useState, useEffect } from 'react';
import { allTeams, testUserId } from './ApiComp';

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
  const [progressPopUp, setProgressPopUp] = useState(0);
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
  const [inputValue, setInputValue] = useState(1);
  const [isInputZero, setIsInputZero] = useState(false);
  const [rewardWon, setRewardWon] = useState(null);
  const [thorwBtnOn, setThrowBtnOn] = useState(true);
  const [beansWon, setBeansWon] = useState(0);
  const [gameErroCode, setGameErrorCode] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const [gameError, setGameError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rewardsList, setRewardsList] = useState([]);
  const [rewardsContent, setRewardsContent] = useState("");
  const [showGamePopUp, setShowGamePopUp] = useState(0);
  const [gameMsg, setGameMsg] = useState("");
  const [rewardHistory, setRewardHistory] = useState([]);
  let [isCombo, setIsCombo] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (window.phone && typeof window.phone.getUserInfo === "function") {
          window.phone.getUserInfo((userInfo) => {
            if (userInfo) {
              setCurrentUser({
                userId: userInfo.userId > 0 ? userInfo.userId : 0,
                userToken: userInfo.token || null,
              });
            } else {
              setCurrentUser({
                userId: 0,
                userToken: null,
              });
            }
          });
        } else {
          throw new Error("window.phone.getUserInfo is not available");
        }
      } catch (error) {
        setCurrentUser({
          userId: 0,
          userToken: null,
        });
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
    getInfo();
  }, []);



  const date = new Date();
  const day = date.getUTCDate().toString().padStart(2, '0');
  const months = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const years = date.getUTCFullYear();
  const dateStr = `${years}-${months}-${day}`;
  const dateStrPrev = `${years}-${months}-${(day - 1).toString().padStart(2, '0')}`;

  //utility function
  const onChangeHandle = (event) => {
    let val = event.target.value;
    let cleaned = val.replace(/\./g, '')
    const isInteger = /^\d*$/.test(val);
    if (!val) {
      setIsInputZero(true);
    } else {
      setIsInputZero(false);
    }
    if (isInteger) {
      setInputValue(parseInt(event.target.value));
    } else {
      setInputValue(cleaned);
    }
  };

  const onUpCheck = (e) => {
    if (isInputZero) {
      // setIsDisabled(true);
      // setRewardWon(null);
      setThrowBtnOn(false);
      // setBeansWon(0);
    } else {
      // setIsDisabled(false);
      setThrowBtnOn(true);
    }


    let max;
    if (/[+-.]/.test(e.key)) {
      e.key.replace('');
      setInputValue("");
    } else {
      // let max = userInfo.throwsLeft < 99 ?  userInfo.throwsLeft : 99;
      let throws = Math.floor(userInfo.throwsLeft / 25000);
      if (throws <= 999 && throws > 0) {
        max = throws;
      } else if (throws > 999) {
        max = 999;
      } else if (throws === 0) {
        max = 1;
      }
      if (inputValue > 1) {
        setIsCombo(true);
      } else {
        setIsCombo(false);
      }
      let number = inputValue > max ? max : inputValue <= 0 ? "" : inputValue;
      setInputValue(parseInt(number));
    }
  };

  const toggleGamePopUp = () => {
    setShowGamePopUp(0);
  };

  const toggleProgressPopUp = () => {
    setProgressPopUp((prevState) => !prevState);
  };

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

  const playGame = () => {
    if (isDisabled) {
      return;
    }
    setIsDisabled(true);
    if (!inputValue) {
      setIsInputZero(true);
      setIsDisabled(false);
      return;
    }
    setRewardWon(null);
    setThrowBtnOn(false);
    setBeansWon(0);
    fetch(
      `${baseUrl}/api/activity/courtSide/playGame?playCount=${parseInt(
        inputValue
      )}`,
      {
        method: "POST",

        headers: {
          checkTag: "",
          userId: currentUser.userId,
          token: currentUser.userToken,
          // userId: '550002950',
          // token: 'A172A7E66C5448459D8891953C40B63CD7',
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log('result...??', res);
        setGameErrorCode(res?.errorCode);
        setErrMsg(res?.msg);
        if (res.errorCode === 0) {
          //window.alert(JSON.stringify(res));
          setGameError(false);
          setIsPlaying(true);
          setRewardWon(res.data.scores);
          setIsSuccess(res?.data?.rewardDTOList.length);
          setRewardsList(res?.data?.rewardDTOList);
          setRewardsContent(res?.data?.rewardMsg);
          setBeansWon(res.data.totalBeans);
          setTimeout(() => {
            setIsPlaying(false);
            setShowGamePopUp(true);
            getUserDaily();
            getWeeklyUser(userInfo.weekIndex);
            getWeeklyUserPrev(userInfo.weekIndex);
            getOverallUsers();
            getGameMarqueeData();
            getMilestoneMarqueeData();
            getInfo();
            getRewardHistory();
            setThrowBtnOn(true);

            setIsDisabled(false);
            setInputValue(1);
          }, 1600);
        } else if (res.errorCode === 11000003) {
          setGameError(true);

          setIsPlaying(false);
          setThrowBtnOn(true);
          setShowGamePopUp(true);
          setIsDisabled(false);
        } else {
          setGameError(true);
          setGameMsg(res.msg);
          setIsPlaying(false);
          setThrowBtnOn(true);
          setShowGamePopUp(true);
          setIsDisabled(false);
        }
      })
      .catch((error) => {
        console.error("error playing game");
        setIsDisabled(false);
      });
  };

  function getRewardHistory() {
    fetch(
      `${baseUrl}/api/activity/eidF/getRecordInfo?eventDesc=20240726_court&rankIndex=21&pageNum=1&pageSize=20&type=1&userId=${currentUser.userId}`
    )
      .then((res) => res.json())
      .then((res) => {
        setRewardHistory(res?.data?.list);
      }).catch((err) => console.log(err));
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
    getMilestoneMarqueeData();

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
    //playing game
    inputValue,
    onChangeHandle,
    onUpCheck,
    isInputZero,
    thorwBtnOn,
    isPlaying,
    playGame,
    rewardWon,
    showGamePopUp,
    beansWon,
    gameErroCode,
    errMsg,
    rewardsList,
    rewardsContent,
    isCombo,
    isSuccess,
    toggleGamePopUp,
    // popup
    progressPopUp,
    toggleProgressPopUp
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default AppContext;
