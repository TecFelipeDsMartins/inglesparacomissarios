const Card = (props) => {
  return(
    <div class="flex flex-col md:w-3/12 md:h-3/5 m-8 p-3 space-y-5 rounded-xl   bg-white shadow-lg " 
        style={{backgroundImage: props.img,
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
        <section class="h-screen flex justify-center items-end">
            <button type="button" class=" w-full bg-gray-100 text-blue-900 hover:bg-gray-200 px-3 py-1 rounded-md text-1xl">{props.name}</button>
        </section>
    </div>
  )
}

export default Card