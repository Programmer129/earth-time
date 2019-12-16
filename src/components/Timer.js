import React, { useState, useEffect }  from 'react';
import sound from '../assets/audio/tick.mp3'
const Timer = () => {

  const [audio] = useState(new Audio(sound));

  const addZeros =(obj) => {
    if(obj.seconds < 10){
      obj.seconds = '0' + obj.seconds
    }
    if(obj.minutes < 10){
      obj.minutes = '0' + obj.minutes
    }
    if(obj.hours < 10){
      obj.hours = '0' + obj.hours
    }
    if(obj.days < 10){
      obj.days = '0' + obj.days
    }

  }

  const calculateTimeLeft = () => {
    const difference = new Date(2032, 12, 31) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    addZeros(timeLeft);
    return timeLeft;
  };

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(calculateTimeLeft())
      audio.play();
    }, 1000);
  },[audio])

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={Math.random() } >
        <span className="time">{timeLeft[interval]}</span>
        <span className="time-separator">{":"}</span>
      </span>

    );

  });

  return(
    <div className="timer text-center my-5">
      <h2 className="text-center my-5 earth-time">Earth time left</h2>
      <audio>
        <source src={sound} type="audio/mpeg" muted  autoPlay="" />
        Your browser does not support the audio element.
      </audio>
    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  )

}

export default Timer;
