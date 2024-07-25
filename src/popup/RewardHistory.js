import React from "react";
import PopUp from "../popup/Popup.js";
import titleBanner from "../assests/reward-records.png";
import bg from "../assests/task-game-bg2.png";
import "../Style/popup.css";
import { RewardHistoryItem } from "../popup/RewardHistoryItem.js";
import { useApi } from "../ApiCall/AppContext.js";


export const RewardHistory = ({ toggleRewardsHistory, rewardHistory }) => {
    // const {toggleRewardsHistory, rewardHistory} = useApi();


    return (
        <PopUp
            title={titleBanner}
            bg={bg}
            popUpHandler={toggleRewardsHistory}
            isRewards={true}
        >
            <div className="rewardHistoryPopUp">
                <div className="rewardsTitle">
                    <div className="">Time</div>
                    <div className="">Rewards</div>
                </div>
                {rewardHistory?.length ? (
                    <div className="rewardWrapper">
                        {rewardHistory?.map((rewardItem, index) => (
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
