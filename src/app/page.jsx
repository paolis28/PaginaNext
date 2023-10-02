'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Navigation } from './components/Navigation'
import { useState } from 'react'
import React from 'react';

const imagenes = [
  { src: "/img/PideAqui/img-boneless1.jpg", width: 340, height: 260, alt: "img1" },
  { src: "/img/PideAqui/img-stackerChipoootles_16.9.jpg", width: 340, height: 260, alt: "img1" },
  { src: "/img/PideAqui/img3-buenosdesayunos.png", width: 340, height: 260, alt: "img1" },
  { src: "/img/PideAqui/img4-malteada.png", width: 340, height: 260, alt: "img1" },
  { src: "/img/PideAqui/img5-delicioso.png", width: 340, height: 260, alt: "img1" },
];

export function handler(req, res) {
  res.status(200).json(imagenes);
}

export default function PideAqui() {
  const [sliderScrollLeft, setSliderScrollLeft] = useState(0); // Estado para el desplazamiento del slider

  // Funciones para manejar el desplazamiento del slider
  const handlePrevClick = () => {
    setSliderScrollLeft(sliderScrollLeft - 360);
  };

  const handleNextClick = () => {
    setSliderScrollLeft(sliderScrollLeft + 360);
  };

  return (
    <>
      <Navigation></Navigation>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.imgFondo}>
            <Image className={styles.imgWhopper} src="/img/pideAqui/imgHamburguesa_Whopper.png" width='1300'
              height='540' alt=''></Image>
          </div>

          <div className={styles.opcionesComida}>
            <h2>¿Qué le gustaría?</h2>

            <button className={styles.btOpciones}>
              <Image className={styles.imgOpciones} src="/img/pideAqui/imgOP1Restaurant.png" 
              alt="MiImagen"
                width='70' height='68'></Image>
              <label className={styles.label}>Para comer en restaurante</label>
              <p className={styles.descripcion}>Para consumir en Burger King</p>
            </button>

            <button className={styles.btOpciones}>
              <Image className={styles.imgOpciones} src="/img/pideAqui/imgOP2-Tienda.png" alt="MiImagen"
                width='70' height='68'></Image>
              <label className={styles.label}>Recoger en Tienda</label>
              <p className={styles.descripcion}>El pedido está empacado para llevar</p>
            </button>

            <button className={styles.btOpciones}>
              <Image className={styles.imgOpciones} src="/img/pideAqui/imgOP3-ADomicilio.png"
                alt="MiImagen"
                width='70' height='68'></Image>
              <label className={styles.label}>Entrega a Domicilio</label>
              <p className={styles.descripcion}>Recibe tu pedido en la dirección que nos indiques</p>
            </button>
          </div>

          <div className={styles.noticias}>
            <h2 className={styles.h2}>Noticias</h2>
            <Link href='/Noticias' className={styles.link}>Ver todo</Link>

            <div className={styles.controls}>
              <button className={styles.prev} onClick={handlePrevClick}>
                <Image src="/img/PideAqui/flecha-atras.png" width="18" height="12" alt='img' />
              </button>
              
              <button className={styles.next} onClick={handleNextClick}>
                <Image src="/img/PideAqui/flecha-next.png" width="15" height="11" alt='img' />
              </button>
            </div>
            <div className={styles.slider} style={{ transform: `translateX(-${sliderScrollLeft}px)` }}>
              {imagenes.map((imagen, index) => (
                <Image key={index} className={styles.img1} src={imagen.src} width={imagen.width} height=
                {imagen.height} alt={imagen.alt} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.foo}>
        <div className={styles.barraInicial}>
            <ul>
                <li>
                  <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Spanish</Link>
                </li>

                <li>
                  <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Alto c
                  contraste</Link>
                </li>

                <input className={styles.input} type="checkbox" id="switchAltoContraste"/>

                <label for="switchAltoContraste" className={styles.checkboxLabel}>
                    <span className={styles.ball}></span>
                </label>    

                <li>
                  <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Condiciones de 
                  Servicio</Link>
                </li>

                <li>
                  <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Política de 
                  privacidad</Link>
                </li>

                <li>
                  <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Preguntas 
                  Frecuentes</Link>
                </li>

                <li>
                  <Link className={styles.linka} href="/" style=
                  {{textDecoration:"none;"}}>Contactanos</Link>
                </li>
            </ul>
        </div>

        <div className={styles.fooContainer}>
            <div className={styles.logo}>
                <Image className={styles.imgLogo} src="/img/Menu/Logo-3.svg" width='140' height='140' 
                alt='logo'/>
            </div>

            <div className={styles.linksFoo}>
                <h4>Información</h4>
                <ul>
                    <li className={styles.li}>
                      <Link className={styles.linka} href="/" style={{textDecoration:"none;"}}>Sitemap 
                      TML</Link>
                    </li>

                    <li className={styles.li}>
                      <Link className={styles.linka} href="/" style=
                      {{textDecoration:"none;"}}>Restaurantes</Link>
                    </li>

                    <li className={styles.li}>
                      <Link className={styles.linka} href="/" style=
                      {{textDecoration:"none;"}}>Contáctanos</Link>
                    </li>

                    <li className={styles.li}>
                      <Link className={styles.linka} href="/" style=
                      {{textDecoration:"none;"}}>Preguntas frecuentes</Link>
                    </li>

                    <li className={styles.li}>
                      <Link className={styles.linka} href="/" style=
                      {{textDecoration:"none;"}}>Aviso de privacidad Integral</Link>
                    </li>
                </ul>
            </div>
        </div>

        <div className={styles.redes}>
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
