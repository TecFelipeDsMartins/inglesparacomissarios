import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';

const Mic = () => {
  const [ speechText, setSpeechText ] = useState()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

 
  return (
    <>
      <textarea value={speechText} onChange={(e)=>setSpeechText(e.target.value)} className="bg-transparent border w-5/6 h-24 mx-5 text-white" ></textarea>
      <p className="text-gray-300">{transcript}</p>
      <div className="w-full flex flex-row justify-center items-center">
        {listening ?
        <FaMicrophone className="text-red-500 text-2xl animate-pulse" onClick={SpeechRecognition.stopListening}>Stop</FaMicrophone> 
        : 
        <FaMicrophone className="text-gray-400 text-2xl" onClick={()=>SpeechRecognition.startListening({ continuous: true })}>Start</FaMicrophone>
        }
        <button className="text-gray-400 pl-4" onClick={resetTranscript}>Reset</button>
      </div>
    </>    
  );
};
export default Mic