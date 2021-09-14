import NavBar from '../components/NavBar'
import Card from '../components/Card'


export default function Home() {
  return (
    <>
      <NavBar/>
      <section className="h-screen  flex flex-col justify-center content-center items-center " 
               style={{backgroundImage: 'url("img/aeroplane-aircraft-aircraft-wing-723240.jpg")',
                       backgroundAttachment: 'fixed',
                       backgroundSize: 'cover',
                       backgroundColor: 'rgba(0,0,0,0.5)',
                       backgroundBlendMode: 'multiply'}}>
        <h1 className="text-3xl shadow-md mb-6 pb-11  text-center w-full h-10 font-medium font-sans  text-white ">O melhor conteúdo para se tornar um comissário de bordo</h1>                 
        <div className="container flex flex-row justify-center content-center p-10 w-11/12  h-5/6" >
          <Card name="Entrevista"
                img='url("img/businessmen-businesspeople-businesswomen-1249158.jpg")'/>
          <Card name="teste online"
                img='url("img/desk-email-laptop-7112.jpg")'/>
          <Card name="Gramática"
                img='url("img/abc-alphabet-blackboard-265076.jpg")'/>          
        </div>
      </section>
    </>
  )
}
