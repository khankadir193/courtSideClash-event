import React, { useEffect, useState } from "react";
// import ball from "../assets/images/completed.png";
// import fieldGoal from "../assets/images/feild-goal-icon.png";
import { rewGet } from "../ApiCall/imageContext";
export const RewardHistoryItem = (props) => {
  const { rewardItem } = props;
  return (
    <div className="historyItem">
      <div className="time">
        <p className="date">{rewardItem?.time?.split("T")[0]}</p>
        <p className="hours">
          {rewardItem?.time?.split("T")[1]?.split(".")[0]}
        </p>
      </div>
      {/* <div className="rewardType"> */}
        {/* <img
          src={
            rewardItem?.rewardType == "1"
              ? ball
              : rewardItem?.rewardType == "1"
              ? fieldGoal
              : fieldGoal
          }
        /> */}
      {/* </div> */}
      <div className="rewards">
        <div className="rewards-item-images">
          {!rewardItem?.rewardDTOList?.length ? (
            <img src={rewGet("beansbag")} />
          ) : (
            rewardItem?.rewardDTOList?.map((item) => {
              return<>
              <img src={rewGet(item.desc)} />
              <p className="text">{item.count}<span>&nbsp;</span>{item.desc}</p>
              </>
})
          )}
        </div>
        
        
          {/* {rewardItem?.rewardType == "1" &&
            `${rewardItem?.beans} beans`}

          {rewardItem?.rewardType == "1" &&
            `${rewardItem?.rewardDTOList[0]?.count} ${
              rewardItem?.rewardDTOList[0]?.count > 1
                ? "days"
                : "day"
            }  ${rewardItem?.rewardDTOList[0]?.desc}`}

          {rewardItem?.rewardType == "1" &&
            rewardItem?.rewardDTOList?.length > 0 &&
            `${rewardItem?.rewardDTOList[0]?.count}  ${
              rewardItem?.rewardDTOList[0]?.count > 1
                ? "days"
                : "day"
            }   ${
              rewardItem?.rewardDTOList[0]?.desc
            } and ${rewardItem?.rewardDTOList[1]?.count} 
            
            ${
              rewardItem?.rewardDTOList[1]?.count > 1
                ? "days"
                : "day"
            }
              ${rewardItem?.rewardDTOList[1]?.desc}`}

          {rewardItem?.rewardType == "1" &&
            rewardItem?.beans > 0 &&
            `${rewardItem?.beans} beans`} */}
        {/* </p> */}
      </div>
    </div>
  );
};
