import React from 'react';
import '../Style/GamePlay.css';
import { useApi } from '../ApiCall/AppContext';

const GameComp = () => {
    const { userInfo, inputValue, onChangeHandle, onUpCheck, isInputZero, thorwBtnOn, isPlaying, playGame } = useApi();
    return (
        <>
            <div className="gameBtns">
                <button className="throws-left">
                    Throws Left:{` ${Math.floor(userInfo.throwsLeft / 25000)}`}
                </button>
                <div style={{ position: "relative" }}>
                    <div className="chances">
                        <span>Chances:</span>
                        <div>
                            <input
                                id="chancesInput"
                                className="inputField"
                                // name="NumInput"
                                oninput={(e) => e.target.value = (parseInt(this.value) || 0)}
                                type="number"
                                value={inputValue}
                                min={1}
                                max={999}
                                onChange={onChangeHandle}
                                onKeyUp={onUpCheck}
                                pattern="[0-9]"
                                style={{ border: isInputZero ? "1px solid red" : "" }}
                            />
                        </div>
                    </div>
                    {isInputZero === true ? (
                        <span className="inputZero">Enter some Value</span>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <button
                className={thorwBtnOn === false ? "thrown" : "throw-btn"}
                disabled={isPlaying ? true : false}
                // disabled={true}
                onClick={playGame}
            ></button>
            <button className="hand" style={{ pointerEvents: "none" }}></button>
            <button className="throw"></button>
        </>
    )
};

export default GameComp;