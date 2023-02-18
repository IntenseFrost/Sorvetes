import muitosPotes from '../img/muitosPotes.jpg'
import estilo from './Banner.module.css'

function Banner (){
    return(

        <>
            <img className={estilo.imgBanner} src={muitosPotes} alta="banner"/>
        </>
            
    )
}

export default Banner