import React from 'react';
import sound from '../assets/audio/Voice.m4a'
const Voice = () => {
  return(
    <div>
       <audio controls autoPlay className="mt-2 audio-ee">

        <source src={sound} type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Voice
