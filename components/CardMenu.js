const Card = (props) => {
  return(
    <div className="flex flex-col sm:w-1/3  sm:h-4/6 w-auto h-40        m-8 p-3 space-y-5 rounded-xl   bg-white shadow-lg " 
        style={{backgroundImage: props.img,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
        <section className="h-screen flex justify-center items-end">
            <button type="button" className=" w-full bg-gray-100 text-blue-900 hover:bg-gray-200 px-3 py-1 rounded-md text-1xl">{props.name}</button>
        </section>
    </div>
  )
}

export default Card