import React from 'react';
import { useApi } from '../ApiCall/AppContext';

const GuideRewardComp = () => {
    const { } = useApi();
    return (
        <div>
            <div className="infoAndRewards">
                <button
                    className="guideBtn"
                    onClick={() => setShowGuide(1)}
                    disabled={isDisabled}
                ></button>
                <button
                    className="rewardBtn"
                    onClick={() => setShowRewardHistory(1)}
                    disabled={isDisabled}
                ></button>
            </div>
        </div>
    );
}

export default GuideRewardComp