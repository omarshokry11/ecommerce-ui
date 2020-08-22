import React, { useEffect,useRef, useState } from "react";
import { Image } from 'react-bootstrap';

import "./style/Offers.scss";

const Offers = () => {
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('oct 30, 2020 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="offers">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 col-12 main-offers">
                        <Image src="offers/item-01.jpg" />
                        <div className="inner-1-offers">
                            <p>The Beauty</p>
                            <h3>LOOKBOOK</h3>
                            <a href=" ">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 main-offers">
                        <Image src="offers/item-02.jpg" />
                        <div className="inner-2-offers">
                            <a href=" ">Gafas sol Hawkers one</a>
                            <p>
                                <span className="span-1">$29.50</span>
                                <span className="span-2">$15.90</span>
                            </p>
                            <div className="timer">
                                <div>
                                    <span className="number">{timerDays}</span>
                                    <span>days</span>
                                </div>
                                <div>
                                    <span className="number">{timerHours}</span>
                                    <span>hrs</span>
                                </div>
                                <div>
                                    <span className="number">{timerMinutes}</span>
                                    <span>mins</span>
                                </div>
                                <div>
                                    <span className="number">{timerSeconds}</span>
                                    <span>secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;