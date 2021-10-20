import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';
import { GiTrashCan } from 'react-icons/gi';

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
      <div className="w-full flex flex-row justify-center items-center py-8 sm:py-0">
        {listening ?
        <FaMicrophone className="text-red-500 text-2xl animate-pulse cursor-pointer" onClick={SpeechRecognition.stopListening}>Stop</FaMicrophone> 
        : 
        <FaMicrophone className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer " onClick={()=>SpeechRecognition.startListening({ continuous: true })}>Start</FaMicrophone>
        }
        <GiTrashCan className="text-gray-400 text-center text-4xl font-light cursor-pointer transition-all ease-in-out   transform hover:rotate-90  hover:text-gray-600 pb-2 " onClick={resetTranscript}>Limpar texto</GiTrashCan>
      </div>
    </>    
  );
};
export default Mic