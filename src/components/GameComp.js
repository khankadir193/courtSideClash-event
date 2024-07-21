import React from 'react';
import '../Style/GamePlay.css';
import { useApi } from '../ApiCall/AppContext';

const GameComp = () => {
    // Destructure values from the useApi hook
    const { userInfo, inputValue, onChangeHandle, onUpCheck, isInputZero, thorwBtnOn, isPlaying, playGame } = useApi();

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
        </>
    );
};

export default GameComp;
