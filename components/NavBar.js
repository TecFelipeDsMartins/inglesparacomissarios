import { useState } from "react"
import { FaPlaneDeparture } from 'react-icons/fa'

const NavBar = () => {
  
  const [hidden, setHidden] = useState('hidden')

  const toggle = () => {
      hidden == 'hidden' ? setHidden('') : setHidden('hidden')
      }
    return(
    <>
    {/* navbar  */}
<nav className="bg-gray-100">
  <div className="px-8 mx-auto">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        {/* logo */}
        <div>
          <a href="" className="flex items-center px-2 py-5 text-gray-700">
            <FaPlaneDeparture/>      
            <span href="" className="mx-2 font-bold">FlyHigh</span>
          </a>
        </div>
        {/* primary nav */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="" className="py-5 px-3 hover:text-gray-600">Entrevistas</a>
          <a href="" className="py-5 px-3 hover:text-gray-600">Teste-online</a>
          <a href="" className="py-5 px-3 hover:text-gray-600">Gramática</a>
        </div>  
      </div>
      {/* secondary nav */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="" className="py-5 px-3 hover:text-gray-600">Entrar</a>
        <a href="" className="py-2 px-3 bg-blue-400 hover:bg-blue-300 rounded text-gray-100 hover:text-white transition duration-300">Cadastrar-se</a>
      </div>
      
      {/* mobile button */}
      <div className="flex md:hidden items-center">
        <button className="mobile-menu-button" onClick={toggle}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>  
        </button> 
      </div>
    </div>
  </div>

  {/* mobile menu */}
  <div className="md:hidden mobile-menu" className={hidden}>
    <a href="#" className="block py-2 px-4 text-small hover:bg-gray-200">Features</a>
    <a href="#" className="block py-2 px-4 text-small hover:bg-gray-200">Pricing</a>
  </div>
</nav>
</>
  )
}

export default NavBar