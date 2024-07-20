import React from 'react';
import Marquee from 'react-fast-marquee';
import { useApi } from '../ApiCall/AppContext';
import { gotoProfile } from '../ApiCall/functions';
import unknownUser from "../assests/default.png";
import '../Style/Marquee.css';
import beans from "../assests/bean.png";

const TickerTape = () => {
    const { marqueeData } = useApi();
    console.log('marqueeData....',marqueeData);

    return (
        <div className="gameMarquee">
            <Marquee speed={70}>
                {marqueeData.game ? marqueeData.game.map((user, index) => (
                    <div className={`user-item ${index % 2 != 0 ? 'user-item-odd' : 'user-item-even'}`} key={index}>
                        <img
                            src={user.portrait ? user.portrait : unknownUser}
                            className="marquee-user"
                            onClick={() => gotoProfile(user?.userId)}
                        />
                        <div className="details">
                            <span className="name">{`${user.nickname.slice(
                                0,
                                6
                            )}...`}</span>
                            <span>&nbsp;</span>
                            <span>{`has won ${JSON.parse(user?.desc)[0]?.count}     `}</span>
                            <span>&nbsp;</span>
                            {JSON.parse(user?.desc)[0]?.desc == 'beans' || JSON.parse(user?.desc)[0]?.desc == 'Beans' ? <span>{" Beans "}  <img style={{ verticalAlign: 'middle' }} src={beans} /></span> : ''}
                            {/* <span>
                      <img src={beans} />
                    </span> */}
                            <span> . Congratulations!</span>
                        </div>
                    </div>
                )) : ''}
            </Marquee>
        </div>
    )
}

export default TickerTape;