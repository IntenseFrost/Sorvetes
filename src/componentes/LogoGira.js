import logoCentro from "../img/logoCentro.png"
import logoBorda from "../img/logoBorda.png"
import estilo from "./LogoGira.module.css"

function LogoGira () {
    return (
     
     
    <div className={estilo.boxLogo}>

       <img className={estilo.imgBorda} src={logoBorda} alt="logo que gira"/>

        <img className={estilo.imgCentro} src={logoCentro} alt="logo que gira"/>
    
    </div>  
 

    )
}

export default LogoGira