import React, { useEffect,useRef, useState } from "react";
import { Image } from 'react-bootstrap';
import firebase from "../../../../Firebase/config.js";

import "../style/Offers.scss";

export default () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        firebase.database().ref('offer').once('value').then(response => {
        let offer = [];
        response.forEach(item => {
            offer.push(item.val());
        });
        setItems(offer);
        }).catch((err) => console.log(err));
    }, [items]);

    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('Mar 1, 2021 00:00:00').getTime();

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
            clearInterval('interval.current');
        };
    });

    return (
        <div className="offers">
            <div className="container text-center">
                <div className="row">
                        {
                            items.map(item => {
                                return(
                                    <div className="col-md-6 col-12 main-offers" key={item.id}>
                                       <div className="img">
                                            <Image src={item.img} />
                                       </div>
                                        {item.linkName1 && <div className="inner-1-offers">
                                            <p>{item.p}</p>
                                            <h3>{item.h3}</h3>
                                            <a href=" ">{item.linkName1}</a>
                                        </div>}

                                        {/* // */}
                                        {item.linkName2 && <div className="inner-2-offers">
                                            <a href=" ">{item.linkName2}</a>
                                            <p>
                                                <span className="span-1">{item.price1}</span>
                                                <span className="span-2">{item.price2}</span>
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
                                        </div>}
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}
