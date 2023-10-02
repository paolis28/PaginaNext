import {Navigation} from '../components/Navigation'
import style from '../Noticias/noticias.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const megadata={
    title:'Noticias Burger king México'
}

export default function Noticias(){
    return(
    <>
    <Navigation></Navigation>
    <main>
        <div className={style.containerNoticias} id="noticias">
            <h1>Noticias</h1>
            <Image className={style.img1} src="/img/PideAqui/img-boneless1.jpg"
            width='340' height= '260' alt='img1'/>
            <Image className={style.img1} src="/img/PideAqui/img-stackerChipoootles_16.9.jpg"
            width='340' height= '260' alt='img1'/>
            <Image className={style.img1} src="/img/PideAqui/img3-buenosdesayunos.png"
            width='340' height= '260' alt='img1'/>
            <Image className={style.img1} src="/img/PideAqui/img4-malteada.png"
            width='340' height= '260' alt='img1'/>
            <Image className={style.img1} src="/img/PideAqui/img5-delicioso.png"
            width='340' height= '260' alt='img1'/>
        </div>
    </main>

    <footer className={style.foo}>
        <div className={style.barraInicial}>
            <ul>
                <li>
                  <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Spanish</Link>
                </li>

                <li>
                  <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Alto c
                  contraste</Link>
                </li>

                <input className={style.input} type="checkbox" id="switchAltoContraste"/>  

                <li>
                  <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Condiciones de 
                  Servicio</Link>
                </li>

                <li>
                  <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Política de 
                  privacidad</Link>
                </li>

                <li>
                  <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Preguntas 
                  Frecuentes</Link>
                </li>

                <li>
                  <Link className={style.linka} href="/" style=
                  {{textDecoration:"none;"}}>Contactanos</Link>
                </li>
            </ul>
        </div>

        <div className={style.fooContainer}>
            <div className={style.logo}>
                <Image className={style.imgLogo} src="/img/Menu/Logo-3.svg" width='140' height='140' 
                alt='logo'/>
            </div>

            <div className={style.linksFoo}>
                <h4>Información</h4>
                <ul>
                    <li className={style.li}>
                      <Link className={style.linka} href="/" style={{textDecoration:"none;"}}>Sitemap 
                      TML</Link>
                    </li>

                    <li className={style.li}>
                      <Link className={style.linka} href="/" style=
                      {{textDecoration:"none;"}}>Restaurantes</Link>
                    </li>

                    <li className={style.li}>
                      <Link className={style.linka} href="/" style=
                      {{textDecoration:"none;"}}>Contáctanos</Link>
                    </li>

                    <li className={style.li}>
                      <Link className={style.linka} href="/" style=
                      {{textDecoration:"none;"}}>Preguntas frecuentes</Link>
                    </li>

                    <li className={style.li}>
                      <Link className={style.linka} href="/" style=
                      {{textDecoration:"none;"}}>Aviso de privacidad Integral</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className={style.redes}>
            <Link href="https://www.facebook.com/">
                <Image src="/img/Menu/Facebook.svg" width='40' height='30' alt='log-face'/>
            </Link>

            <Link href="https://twitter.com/">
                <Image src="/img/Menu/Twitter.svg" width='40' height='30' alt='log-twit'/>
            </Link>

            <Link href="https://www.youtube.com/">
                <Image src="/img/Menu/Youtube.svg" width='40' height='30' alt='log-youtu'/>
            </Link>

            <Link href="https://www.instagram.com/">
                <Image src="/img/Menu/Instagram.svg" width='40' height='30' alt='log-insta'/>
            </Link>
        </div>
    </footer>
    </>
    )
}