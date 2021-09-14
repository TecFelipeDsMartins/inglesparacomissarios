const CardOption = ({icon, text}) => {
  

  return ( 
    <>
      <div className=" flex flex-col justify-center items-center  ml-20 mr-20 mb-8 mt-8 w-2/3">
       <i className='text-blue-900 mb-3 text-4xl'>{icon}</i>
       <p className=" border-t-2 border-blue-900 text-center pt-2">
         {text}
       </p>
      </div>
    </>
   );
}
 
export default CardOption;