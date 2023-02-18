import Banner from '../componentes/Banner';
import LogoGira from '../componentes/LogoGira';
import estilo from './Home.module.css'
import muitosPotes from '../img/muitosPotes.jpg'
import sorveteColher from '../img/sorveteColher.jpg'
import logoTransp from '../img/logoTransp.jpg'
import whats from '../img/whats.png'

function Home(){
    return(
        <div>
       
        <div className={estilo.boxGeral}>
            <LogoGira />
        
        </div>
        <div className={estilo.boxInf}>
                <h1>Sorvetes artesanais</h1><br/>
   
        </div>
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={logoTransp} alta="img sorvete"/>
            
        </div>
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={muitosPotes} alta="img sorvete"/>
            
        </div>
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={sorveteColher} alta="img sorvete"/>
            
        </div>

        
        <a className={estilo.btnWhats} href="https://wa.me/5511913755522text=Adorei%20seu%20artigo" ><img src={whats} alta="img sorvete"/></a>

       
        </div>
        
        
    )
}

export default Home