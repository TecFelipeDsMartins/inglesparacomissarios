import Head from 'next/head'

import NavBar from '../components/NavBar'
import CardMenu from '../components/CardMenu'
import CardOption from '../components/CardOption'
import { FaCommentAlt, FaCommentDots, FaFacebook, FaFireExtinguisher, FaFirstAid,
         FaImage,
         FaInstagram,
         FaLinkedin,
         FaPlane, 
         FaQuestionCircle, 
         FaWhatsapp} from 'react-icons/fa'



const styles={
  lobster: {fontFamily: "Lobster"},
  urbanist: {fontFamily: "Urbanist",
             fontSize: 20,
             fontWeigth: 100 },
}



export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap" rel="stylesheet" />      </Head>
      <NavBar/>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/aeroplane-aircraft-aircraft-wing-723240.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.5)',
                       backgroundBlendMode: 'multiply'}}>
        <h1 className="text-3xl shadow-md mb-6 pb-11  text-center w-full h-10 font-medium font-sans  text-white ">O melhor conteúdo para se tornar um comissário de bordo</h1>                 
        <div className="container flex flex-row justify-center content-center p-10 w-11/12  h-5/6" >
          <CardMenu name="Entrevista"
                img='url("img/businessmen-businesspeople-businesswomen-1249158.jpg")'/>
          <CardMenu name="teste online"
                img='url("img/desk-email-laptop-7112.jpg")'/>
          <CardMenu name="Gramática"
                img='url("img/abc-alphabet-blackboard-265076.jpg")'/>          
        </div>
      </section>
      <section className="h-screen  flex flex-col justify-center bg-white ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl mb-4 mt-6">Chegou a sua vez de se tornar um comissário(a)!</h2>
          <p className="pl-60 pr-60 text-center mt-5 mb-5">Curso completo preparatório para entrevistas das Companhias Aéreas. Simulado para responder em inglês todo o tipo de questionamento que cai nas provas. Aqui você vai aprender como responder:</p>
        </div>
        <div className="flex flex-row content-start">
          <CardOption icon={<FaPlane />} text="Resolver Situações de Bordo: mais de 70 situações reais de voo"/>
          <CardOption icon={<FaQuestionCircle />} text="Perguntas Pessoais: mais de 500 questões utilizadas em Seleções"/>
          <CardOption icon={<FaFirstAid />} text="Emergências de Bordo: como proceder corretamente nas emergências"/>
        </div>
        <div className="flex flex-row content-start items-start">
          <CardOption icon={<FaFireExtinguisher />} text="Equipamentos de Emergência: descubra como explicar em inglês a utilização de cada equipamento"/>
          <CardOption icon={<FaCommentAlt />} text="Speeches atualizados: pronúncia, leitura e entonação correta"/>
          <CardOption icon={<FaImage />} text="Descrição de gravuras em inglês"/>
        </div>
        <div className="flex flex-row justify-center ">
          <CardOption icon={<FaCommentDots />} text="Como acrescentar frases de impacto às suas resposta"/>
        </div>
      </section>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/cab-cars-city.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.1)',
                       backgroundBlendMode: 'multiply'}}>

        <h2 className="text-white text-6xl text-center shadow-md " style={styles.lobster}>Realize seus sonhos <br/>Torne-se um comissário de bordo!</h2>
      </section>
      <section  className="h-screen  flex flex-col justify-center items-center"
              style={{backgroundImage: 'url("img/calli.jpg")',
                      backgroundSize: 'cover',
                      backgroundBlendMode: 'overlay',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backgroundPosition: 'center'}}
              >
        <h3 className="mb-16 text-xl" 
            style={{
            fontSize: 23,
            fontFamily: "Lobster",
            fontWeight: 100}}
            >Confira o depoimento de uma aluna que já fez o curso:</h3>
        <div className="flex flex-col justify-center items-center w-6/12 bg-white pr-20 pl-20 p-10 transform -rotate-3 shadow-md ">
          <p className="text-center leading-8" style={styles.urbanist}>“Hello, teacher. Tenho uma ótima notícia, <em>passei na Azul!</em><br/> Me ligaram hoje pra avisar. Meu treinamento começa dia 10 e minha base ficou em BH. O Inglês, graças a vocês, foi tranquilo. Ela me fez algumas perguntas pessoais e uma sobre quais passageiros não podem sentar na saída de emergência. Depois me deu três situações: turbulência, aeroporto fechado por causa do tempo e iríamos pousar em VCP e a última era que iríamos fazer um pouso para reabastecimento. Consegui controlar o nervosismo e falei as situações.</p>
        </div>
      </section>
      <footer className="flex flex-row justify-center justify-between p-8 text-white bg-blue-400 ">
        <div className="w-4/12 flex justify-center">
          <h4>Flyhigh</h4>
        </div>
        <div className="text-2xl flex flex-row justify-center content-around w-4/12 ">
          <i className="p-3  " hrf=""><FaFacebook /></i>
          <i className="p-3 "><FaInstagram /></i>
          <i className="p-3 "><FaLinkedin /></i>
          <i className="p-3 "><FaWhatsapp /></i>
        </div>
        <div className="w-4/12 flex justify-center">
          <h5>created by<em> Felipe Ds Martins</em></h5>
        </div>
      </footer>
    </>
  )
}