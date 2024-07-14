import React, { useContext, useEffect, useRef, useState } from "react";
import '../Style/leaderBoard.css';
import { ButtonSlider } from "./ButtonSlider";
import bg from "../assests/today-yesterday-btn.png";
import currPrevBg from "../assests/current-previous-btn.png";
import TalentLbItem from "./TalentLbItem";
import {
  milestoneRankingData,
  talentWeekly,
  userOverall,
  userWeekly,
} from "../ApiCall/ApiComp";
import { AppContext } from "../App";
import { useApi } from "../ApiCall/AppContext";
// import { useApi } from "../ApiCall/AppContext";

const LeaderboardComp = ({ isTalent, selTabs }) => {
  const [tabs, setTabs] = useState({
    cuurent: true,
    prev: false,
  });
  // const { lbData } = useContext(AppContext);
  // const { lbData } = useApi();
  const {
    talentOverall,
    talentWeekly,
    talenWeeklyPrev,
    talenDailyPrev,
    talenDaily,

    userWeekly,
    userOverall,
    userDaily,
    userWeeklyPrev,
    userDailyPrev,
    weeklyTeamUserRanking,
    overallTeamUsersRanking,
    lbData
  } = useApi();

  const [selectedData, setSelectedData] = useState([]);

  const divRef = useRef(null);
  const [restWinners, setRestWinners] = useState(milestoneRankingData);
  const [isSeeMore, setIsSeeMore] = useState(1);
  const shouldIShowTeams = () => {
    if (!isTalent) {
      if (selTabs.overall || selTabs.weekly) return true;
      else {
        return false;
      }
    } else {
      return false;
    }
  };

  const scrollToTop = () => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (isSeeMore === true) {
      scrollToTop();
    }
  }, [isSeeMore]);
  const toggleTabs = () => {
    setTabs({ cuurent: !tabs.cuurent, prev: !tabs.prev });
  };

  useEffect(() => {
    // debugger;
    if (isTalent) {
      if (selTabs.overall) {
        setSelectedData(talentOverall);
      } else if (selTabs.weekly) {
        if (tabs.cuurent) {
          setSelectedData(talentWeekly);
        } else {
          setSelectedData(talenWeeklyPrev);
        }
      } else {
        if (tabs.cuurent) {
          setSelectedData(talenDaily);
        } else {
          setSelectedData(talenDailyPrev);
        }
      }
    } else {
      if (selTabs.overall) {
        setSelectedData(userOverall);
      } else if (selTabs.weekly) {
        if (tabs.cuurent) {
          setSelectedData(userWeekly);
        } else {
          setSelectedData(userWeeklyPrev);
        }
      } else {
        if (tabs.cuurent) {
          setSelectedData(userDaily);
        } else {
          setSelectedData(userDailyPrev);
        }
      }
    }
  }, [isTalent, lbData, selTabs, tabs]);
  return (
    <div className="lb-comp">
      <div className="banner"></div>
      <div className="switch-div">
        {!selTabs.overall && (
          <ButtonSlider
            texts={
              selTabs.daily
                ? ["Today", "Yesterday"]
                : selTabs.weekly
                ? ["Current", "Previous"]
                : []
            }
            bg={selTabs.daily?bg:currPrevBg}
            isPot={1}
            onToggle={toggleTabs}
          />
        )}
      </div>

      <div
        className={`winners ${isSeeMore === false ? "scroll" : ""}`}
        ref={divRef}
      >
        {selectedData?.length ? (
          selectedData?.map((user, index) => (
            <TalentLbItem
              user={user}
              index={index}
              isTalent={isTalent}
              showTeams={shouldIShowTeams()}
              isOverall={!isTalent && selTabs.overall}
            />
          ))
        ) : (
          <div className="center">No Data Found</div>
        )}
      </div>
      <button
        className={isSeeMore ? "seeMore" : "seeLess"}
        onClick={() => setIsSeeMore((prev) => !prev)}
        style={{
          visibility: selectedData?.length > 10 ? "visible" : "hidden",
        }}
      ></button>
    </div>
  );
};

export default LeaderboardComp;
