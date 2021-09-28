import Link from "next/link";

const IntermediateQuestions = () => {
  return ( 
    <>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/bigCity.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.7)',
                       backgroundBlendMode: 'multiply'}}>
        <div className="container w-10/12 flex flex-row justify-center items-center  pb-3 text-xs sm:text-sm">                 
          <Link href="/BasicQuestions">
            <a className="text-center text-gray-400 border-2 w-4/12 rounded-md py-1 mx-2 bg-gray-900 ">Basic</a>
          </Link>
          <Link href="/IntermediateQuestions">
            <a className="text-center text-white border-2 w-4/12 rounded-md py-1 mx-3 ">Intermediate</a>
          </Link>
          <Link href="/AdvancedQuestions">
            <a className="text-center text-gray-400 border-2 w-4/12 rounded-md py-1 mx-2 bg-gray-900">Advanced</a>  
          </Link>
        </div>
        <div className="w-10/12 h-5/6  border-2 rounded-md">

        </div>                    
      </section>
    </>
   );
}
 
export default IntermediateQuestions;