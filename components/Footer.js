import { 
  FaInstagram, FaLinkedin,FaWhatsapp, FaFacebook} from 'react-icons/fa'


const Footer = () => {
  return ( 
    <footer className="flex flex-row justify-center justify-between p-3 text-white bg-blue-400 ">
      <div className="sm:w-4/12 flex justify-center items-center">
        <h4>Flyhigh</h4>
      </div>
      <div className="text-2xl flex flex-row justify-center content-around sm:w-4/12 ">
        <i className="p-3  " hrf=""><FaFacebook /></i>
        <i className="p-3 "><FaInstagram /></i>
        <i className="p-3 "><FaLinkedin /></i>
        <i className="p-3 "><FaWhatsapp /></i>
      </div>
      <div className="sm:w-4/12 flex justify-center">
        <h5>created by<br/><em> Felipe Ds Martins</em></h5>
      </div>
    </footer>
   );
}
 
export default Footer;