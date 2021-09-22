import Link from "next/link";


const BasicQuestions = () => {
  return ( 
    <>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/airport.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.7)',
                       backgroundBlendMode: 'multiply'}}>
        <div className="container w-10/12 flex flex-row justify-center items-center justify-around pb-3 ">                 
          <Link href="/BasicQuestions">
            <a className="text-center text-gray-400 border-2 w-4/12 rounded-md ml-2 mr-2 bg-gray-900 ">Basic</a>
          </Link>
          <Link href="/IntermediateQuestions">
            <a className="text-center text-gray-400  border-2 w-4/12 rounded-md ml-2 mr-2 bg-gray-900">Intermediate</a>
          </Link>
          <Link href="/AdvancedQuestions">
            <a className="text-center text-white border-2 w-4/12 rounded-md ml-2 mr-2">Advanced</a>  
          </Link>  
        </div>
        <div className="w-10/12 h-5/6  border-2 rounded-md">

        </div>                    
      </section>
    </>
   );
}
 
export default BasicQuestions;