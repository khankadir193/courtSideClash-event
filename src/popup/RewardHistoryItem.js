import React from "react";
import { rewGet } from "../ApiCall/imageContext"; // Function to get image paths based on reward description

// Component to display each reward history item
export const RewardHistoryItem = ({ rewardItem }) => {
  // Extracting date and time from rewardItem.time
  const date = rewardItem?.time?.split("T")[0];
  const time = rewardItem?.time?.split("T")[1]?.split(".")[0];

  // Render the component
  return (
    <div className="historyItem">
      {/* Display the date and time of the reward */}
      <div className="time">
        <p className="date">{date}</p>
        <p className="hours">{time}</p>
      </div>

      {/* Display the rewards */}
      <div className="rewards">
        <div className="rewards-item-images">
          {/* If there are no rewards, display a default image */}
          {rewardItem?.rewardDTOList?.length === 0 ? (
            <img src={rewGet("beansbag")} alt="Default Reward" />
          ) : (
            // Otherwise, display the rewards with their descriptions and counts
            rewardItem.rewardDTOList.map((item, index) => (
              <div key={index} className="reward-item">
                <img src={rewGet(item.desc)} alt={item.desc} />
                <p className="text">
                  {item.count}
                  <span>&nbsp;</span>
                  {item.desc}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
