import React from 'react';
import '../Style/GamePlay.css';
import { useApi } from '../ApiCall/AppContext';
import noReward from "../assests/default.png"; // i have to put no-rewardimg
import reward1 from "../assests/basket01.gif";
import reward2 from "../assests/basket02.gif";
import reward3 from "../assests/basket03.gif";
import reward4 from "../assests/basket04.gif";
import reward5 from "../assests/basket05.gif";
import reward6 from "../assests/basket06.gif";
import foreverHeader from "../assests/forever-header.gif";

const GameComp = () => {
    // Destructure values from the useApi hook
    const { userInfo, inputValue, onChangeHandle, onUpCheck, isInputZero, thorwBtnOn, isPlaying, playGame, rewardWon } = useApi();
    const allRewards = [noReward, reward1, reward2, reward3, reward4, reward5, reward6];
    console.log('throwBtnOn...?',thorwBtnOn);

    return (
        <>
            {/* Game buttons container */}
            <div className="gameBtns">
                {/* Button to show the number of throws left */}
                <button className="throws-left">
                    Throws Left: {` ${Math.floor(userInfo.throwsLeft / 25000)}`}
                </button>

                {/* Chances input container */}
                <div style={{ position: "relative" }}>
                    <div className="chances">
                        <span>Chances:</span>
                        <div>
                            {/* Input field for chances */}
                            <input
                                id="chancesInput"
                                className="inputField"
                                type="number"
                                value={inputValue}
                                min={1}
                                max={999}
                                onChange={onChangeHandle}
                                onKeyUp={onUpCheck}
                                pattern="[0-9]"
                                style={{ border: isInputZero ? "1px solid red" : "" }}
                                // Ensure only numbers are inputted
                                onInput={(e) => e.target.value = (parseInt(e.target.value) || 0)}
                            />
                        </div>
                    </div>
                    {/* Display message if input value is zero */}
                    {isInputZero && (
                        <span className="inputZero">Enter some Value</span>
                    )}
                </div>
            </div>

            {/* Throw button */}
            <button
                className={thorwBtnOn ? "throw-btn" : "thrown"}
                disabled={isPlaying}
                onClick={playGame}
            ></button>

            {/* Decorative hand button */}
            <button className="hand" style={{ pointerEvents: "none" }}></button>

            {/* Decorative throw button */}
            <button className="throw"></button>

            {/* Display the character based on playing state */}
            {isPlaying ? (
                <img
                    src={allRewards[inputValue > 1 ? 2 : rewardWon]}
                    className="playing-character"
                />
            ) : (
                <img src={foreverHeader} className="playing-character" />
            )}

            <div id="extraContent"></div>
        </>
    );
};

export default GameComp;
