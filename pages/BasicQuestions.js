import { useState, useEffect } from 'react'
import Link from "next/link";
import Prismic from "prismic-javascript"
import { motion } from 'framer-motion'
import Mic from '../components/Mic';


const BasicQuestions = ({basicQuestions}) => {
  const [ questAndAnsIdx, setQuestAndAnsIdx ] = useState(0)
  const [ questions, setQuestions ] = useState([])
  const [ answer, setAnswer ] = useState([])
  const [ answer2, setAnswer2 ] = useState([])
  const [ atualQuestions, setAtualQuestions ] = useState(null)
  const [ atualAnswer, setAtualAnswer ] = useState(1)

  const [ answerHiddenStatus, setAnswerHiddenStatus ] = useState(false)
  const [ answerHiddenStatus2, setAnswerHiddenStatus2 ] = useState(false)

  useEffect(() => {
    basicQuestions.map((quest)=>{
      setQuestions((old)=>[quest.data.textQuestion, ...old])
      setAnswer((old)=>[quest.data.answer, ...old])
      setAnswer2((old)=>[quest.data.answer2, ...old])
    })
  },[]);

  const handleOnNextClick = () => {
    if(questAndAnsIdx < questions.length - 1){
      setQuestAndAnsIdx((old)=> old + 1)
      setAtualQuestions(old => old = questions[questAndAnsIdx])
    }
  }

  const handleOnPrevClick = () => {
    if(questAndAnsIdx > 0){
      setQuestAndAnsIdx((old)=> old - 1)
      setAtualQuestions(old => old = questions[questAndAnsIdx])
    }
  }
 

  return ( 
    <>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/womanatair.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.7)',
                       backgroundBlendMode: 'multiply'}}>
        <div className="container w-10/12 flex flex-row items-center justify-around pb-3 text-xs sm:text-sm">                 
          <Link href="/BasicQuestions">
            <a className="text-center text-white border-2 w-4/12 rounded-md py-1 mx-2">Basic</a>
          </Link>
          <Link href="/IntermediateQuestions">
            <a className="text-center text-gray-400  border-2 w-4/12 rounded-md px-3 py-1 mx-3 bg-gray-900">Intermediate</a>
          </Link>
          <Link href="/AdvancedQuestions">
            <a className="text-center text-gray-400 border-2 w-4/12 rounded-md py-1 mx-2 bg-gray-900">Advanced</a>  
          </Link>  
        </div>
        <div className="flex flex-col md:px-64 justify-between items-center w-10/12 h-5/6  border-2 rounded-md">
          <div className="flex flex-row justify-center items-start text-lg pt-4 m-3 h-24 ">
            <span className="text-center text-white text-base">{questAndAnsIdx + 1}.</span>
            <p className="text-center text-white inline text-base">{questions[questAndAnsIdx]}</p> 
          </div>
          <Mic />
          <div className="flex flex-col justify-center items-center text-md pt-4 w-full md:px-3">
            <button className="text-gray-300 border border-b-0 w-5/6 md:w-full" onClick={()=> setAnswerHiddenStatus(!answerHiddenStatus)}>Simple Answer</button>
            {answerHiddenStatus && (
              <p className="md:w-full text-center text-white inline p-3 bg-gray-800 border border-t-0 rounded rounded-tr-none rounded-tl-none w-5/6">{answer[questAndAnsIdx]}</p>)
            } 
            <button className="text-gray-300 border w-5/6 md:w-full" onClick={()=> setAnswerHiddenStatus2(!answerHiddenStatus2)}>Advanced Answer</button>
            {answerHiddenStatus2 && (
              <p className="md:w-full text-center text-white inline p-3 bg-gray-800 border border-t-0 rounded rounded-tr-none rounded-tl-none w-5/6">{answer2[questAndAnsIdx]}</p>)
            } 
          </div>
          <div className="flex flex-row justify-center items-center text-lg pt-4 text-white m-3 w-full">
            <button onClick={handleOnPrevClick} className="border-2 pl-2 pr-2 ml-3 mr-3 rounded-md w-1/2">prev</button>
            <button onClick={handleOnNextClick} className="border-2 pl-2 pr-2 ml-3 mr-3 rounded-md w-1/2">next</button>
          </div>
        </div>                    
      </section>
    </>
   );
}

export async function getServerSideProps({ res }){
  const client = Prismic.client('https://testeflyhigh.prismic.io/api/v2')
  const basicQuestions = await client.query(Prismic.Predicates.at('document.type', 'basic-questions'))
  return {
    props:{
      basicQuestions: basicQuestions.results,
    },
  }
}
 
export default BasicQuestions;