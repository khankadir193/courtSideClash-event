import React from "react";
import PopUp from "../popup/Popup.js";
import titleBanner from "../assests/reward-records.png";
import bg from "../assests/task-game-bg2.png";
import "../Style/popup.css";
import { RewardHistoryItem } from "../popup/RewardHistoryItem.js";
import { useApi } from "../ApiCall/AppContext.js";


// Component to display the reward history in a popup
export const RewardHistory = ({ toggleRewardsHistory, rewardHistory }) => {

    return (
        // Using the PopUp component to display the reward history with a custom title and background
        <PopUp
            title={titleBanner}
            bg={bg}
            popUpHandler={toggleRewardsHistory}
            isRewards={true}
        >
            <div className="rewardHistoryPopUp">
                {/* Header section for the rewards table */}
                <div className="rewardsTitle">
                    <div className="column">Time</div>
                    <div className="column">Rewards</div>
                </div>
                
                {/* Conditionally render reward history or a 'No Data Found!' message */}
                {rewardHistory && rewardHistory.length > 0 ? (
                    <div className="rewardWrapper">
                        {rewardHistory.map((rewardItem, index) => (
                            <RewardHistoryItem key={index} rewardItem={rewardItem} />
                        ))}
                    </div>
                ) : (
                    <div className="noData">No Data Found!</div>
                )}
            </div>
        </PopUp>
    );
};