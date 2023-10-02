'use client'
import { NavbarMe } from "../components/NavbarMe"
import stylesCupon from './cupones.module.css'
import Image from 'next/image'
import Link from 'next/link' 
import { useState } from 'react'

export const megadata={
    title:'Cupones BK Mex'
}

export default function CuponesPage(){
    const [imagenGrande, setImagenGrande] = useState(null);
    const [tituloGrande, setTituloGrande] = useState('');
    const [descripcionGrande, setDescripcionGrande] = useState('');

    const imagenes = [
      {
        id: 1,
        titulo: '10 Nuggets 2x1 + Refresco',
        descripcion: '20 nuggets y Refresco chico por $89. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. ',
        src: '/img/Cupones/img1-Nuggets.png',
      },
      {
        id: 2,
        titulo: '2 Whopper Jr. + Cono + Refresco + Papas',
        descripcion: '2 Whopper Jr, cono sencillo, refresco chico y papas chicas por $89. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. ',
        src: '/img/Cupones/img2-Whopper.png',
      },
      {
        id: 3,
        titulo: '2 papas medianas',
        descripcion: '2 Papas Medianas por $39. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. ',
        src: '/img/Cupones/img3-Papasmedianas.png',
      },
      {
        id: 4,
        titulo: 'Hamburguesa con queso + Papas + Cono',
        descripcion: 'Hamburguesa con queso, papas chicas y cono sencillo por $59. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias. ',
        src: '/img/Cupones/img4-Hamburguesaqueso.png',
      },
      {
        id: 5,
        titulo: 'Whopper + 2 Whopper Jr. + King de Pollo + 3 Papas',
        descripcion: 'Whopper sin queso, 2 Whopper Jr. sin queso, King de Pollo y 3 papas chicas por $219. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias.',
        src: '/img/Cupones/img5-WhopperJr.png',
      },
      {
        id: 6,
        titulo: 'Whopper + 1 King de Pollo + 5 Nuggets + 2 Refresco',
        descripcion: 'Whopper, King de Pollo, 5 nuggets y 2 refrescos chicos por $174. Válido del 10 de Julio al 06 de',
        src: '/img/Cupones/img6-Whopperdepollo.png',
      },
      {
        id: 7,
        titulo: '2 Sundae Jr',
        descripcion: '2 Sundae Jr. de cualquier sabor por $29. Válido del 10 de Julio al 06 de         Noviembre de 2023 y/o hasta agotar existencias. No aplica con otras promociones y/o',
        src: '/img/Cupones/img7-Sundae.png',
      },{
        id: 8,
        titulo: 'Whopper + Crispy Chicken + Whopper Jr. + 10 Nuggets + 2 Papas',
        descripcion: 'Whopper sin queso, Crispy Chicken, Whopper Jr, 10 nuggets y 2 papas chicas por $199. Válido del 10 de Julio',
        src: '/img/Cupones/img8-Crispy.png',
      },
      {
        id: 9,
        titulo: '10 Nuggets + Aros Medianos',
        descripcion: '10 nuggets y 1 aros medianos por $64. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o',
        src: '/img/Cupones/img9-NuggetsAros.png',
      },
      {
        id: 10,
        titulo: 'Cono Relleno + Sundae Jr.',
        descripcion: 'Cono sencillo y Sundae Jr de cualquier sabor por $23. Válido del 10 de Julio al 06 de Noviembre de',
        src: '/img/Cupones/img10-ConoRelleno.png',
      },
      {
        id: 11,
        titulo: 'Whopper + Hamburguesa con queso + 10 Nuggets + 2 Papas + 2 Conos',
        descripcion: 'Whopper sin queso, Hamburguesa con queso, 10 nuggets, 2 papas chicas y 2 conos sencillos por $199. Válido del 06',
        src: '/img/Cupones/img11-Whopperhamburesa.png',
      },
      {
        id: 12,
        titulo: '3 Papas Grandes',
        descripcion: '3 papas grandes por $79. Válido del 06 de Febrero al 9 de Julio de 2023 y/o hasta agotar existencias.',
        src: '/img/Cupones/img12-Papasgrandes.png',
      },
      {
        id: 13,
        titulo: 'Pay de Manzana+ Sundae Jr.',
        descripcion: 'Pay de manzana y Sundae Jr. de cualquier sabor por $34. Válido del 10 de Julio al 06 de Noviembre',
        src: '/img/Cupones/img13-Paymanzana.png',
      },
      {
        id: 14,
        titulo: 'Combo 10 Nuggets + Combo Whopper',
        descripcion: 'Combo 10 nuggets chico y combo Whopper sin queso por $179. Válido del 10 de Julio al 06 de Noviembre',
        src: '/img/Cupones/img14-Combo10.png',
      },
      {
        id: 15,
        titulo: 'Combo 10 Nuggets + Combo Whopper Jr. + 2 Conos',
        descripcion: 'Combo 10 nuggets chico, combo Whoppper Jr. sin queso y 2 conos sencillos por $149. Válido del 10 de Julio',
        src: '/img/Cupones/img15-Nuggetscombo.png',
      },
      {
        id: 16,
        titulo: '5 Nuggets + Cono + Papas medianas',
        descripcion: '5 nuggets, cono sencillo y papas medianas por $49. Válido del 10 de Julio al 06 de Noviembre de 2023',
        src: '/img/Cupones/img16-Nuggetscono5.png',
      },
      {
        id: 17,
        titulo: 'Whopper + Whopper Jr. + 5 Nuggets + 2 Papas + Refresco + 2 Sundae Jr.',
        descripcion: 'Whopper sin queso, Whopper Jr. in queso, 5 nuggets, 2 papas chicas, ref chicos y 2 sundae Jr. de cualquier',
        src: '/img/Cupones/img17-WhopperNuggetsPapas.png',
      },
      {
        id: 18,
        titulo: 'Jugo de Naranja + Pay',
        descripcion: 'Jugo de naranja y pay de cualquier sabor por $44. Válido del 10 de Julio al 06 de Noviembre de',
        src: '/img/Cupones/img18-Jugonaranja.png',
      },
      {
        id: 19,
        titulo: '2 Combo Whopper Vegetal + Cono',
        descripcion: '2 Combo Whopper vegetal y cono sencillo por $189. Válido del 10 de Julio al 06 de Noviembre de 2023',
        src: '/img/Cupones/img19-WhopperVegetal2.png',
      },
      {
        id: 20,
        titulo: 'Aros Medianos + Papas medianas + 5 Nuggets',
        descripcion: 'Aros med, papas med y 5 nuggetspor $64. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o',
        src: '/img/Cupones/img20-ArosMedianos.png',
      },
      {
        id: 21,
        titulo: '10 Nuggets + Whopper Jr. + King de Pollo Guacamole + 2 refrescos',
        descripcion: '10 nuggets, Whopper Jr sin queso, King Pollo Guacamole y 2 refrescos chicos por $245. Válido del 10 de Julio',
        src: '/img/Cupones/img21-WhopperNuggets10.png',
      },
      {
        id: 22,
        titulo: '2 Combo Whopper + 6 Nuggets',
        descripcion: '2 combos Whopper sin queso chicos y 6 nuggets por $189. Válido del 10 de Julio al 06 de Noviembre',
        src: '/img/Cupones/img22-WhopperCombo2.png',
      },
      {
        id: 23,
        titulo: '2 Whopper + 2 King de Pollo + 4 Papas',
        descripcion: '2 Whopper sin queso, 2 King de Pollo y 4 papas chicas por $299. Válido del 10 de Julio al',
        src: '/img/Cupones/img23-WhopperKingpollo2.png',
      },
      {
        id: 24,
        titulo: 'King Fusion Nutella o Crunch + Sundae',
        descripcion: 'King Fusion Nutella o Crunch y Sundae de cualquier sabor por $59. Válido del 10 de Julio al 06 de',
        src: '/img/Cupones/img24-Kingfusion.png',
      },
      {
        id: 25,
        titulo: 'Papas + Cono',
        descripcion: 'Papas medianas y cono sencillo por $28.Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar',
        src: '/img/Cupones/img25-PapasCono.png',
      },
      {
        id: 26,
        titulo: 'Whopper + Crispy Chicken + 10 Nuggets + 2 Papas + 2 Conos',
        descripcion: 'Whopper sin queso, Crispy Chicken, 10 nuggets, 2 papas kids y 2 conos sencillos por $189. Válido del 10 de',
        src: '/img/Cupones/img26-WhopperCrispy.png',
      },
      {
        id: 27,
        titulo: 'Whopper + Crispy Chicken + Hamburguesa con queso + 3 Papas + 3 Conos',
        descripcion: 'Whopper sin queso, Crispy Chicken, Hamburgesa con queso, 6 Nuggets, 3 papas kids y 3 conos sencillos por $199. Válido',
        src: '/img/Cupones/img27-WhopperCrispyChiken.png',
      },
      {
        id: 28,
        titulo: 'Whopper + Whopper Jr. + King de Pollo + 6 Nuggets + 2 Papas + 2 Refrescos',
        descripcion: 'Whopper sin queso, Whopper Jr. sin queso, King de Pollo, 6 nuggets, 2 papas chicas, 2 refrescos chicos por $229',
        src: '/img/Cupones/img28-WhopperNuggets6.png',
      },
      {
        id: 29,
        titulo: '10 Nuggets + 2 Papas Medianas + 2 Conos',
        descripcion: '10 nuggets, 2 papas medianas y 2 conos sencillos por $99. Válido del 06 de Febrero al 25 de Junio',
        src: '/img/Cupones/img29-Nuggets10.png',
      },
      {
        id: 30,
        titulo: 'Combo King de Pollo + Cono',
        descripcion: 'Combo King de Pollo chico y cono sencillo por $94. Válido del 10 de Julio al 06 de Noviembre de',
        src: '/img/Cupones/img30-ComboKing.png',
      },
      {
        id: 31,
        titulo: 'Combo Whopper + Cono',
        descripcion: 'Combo Whopper sin queso chico y cono sencillo por $99. Válido del 10 de Julio al 06 de Noviembre de',
        src: '/img/Cupones/img31-ComboWhopper.png',
      },
      {
        id: 32,
        titulo: 'Hamburguesa con queso + Refresco + 10 Nuggets + Cono',
        descripcion: 'Hamburguesa con queso, refresco chico, 10 Nuggets y cono sencillo por $99. Válido del 10 de Julio al 06 de',
        src: '/img/Cupones/img32-HamburguesaQueso.png',
      },
      {
        id: 33,
        titulo: 'Combo Whopper + Combo Crispy Chicken con queso',
        descripcion: 'Combo Whopper sin queso chico y Combo Crispy Chicken con queso chico por 149. Válido del 10 de Julio al',
        src: '/img/Cupones/img33-ComboWhopper.png',
      },      
      {
        id: 34,
        titulo: 'Family King: Whopper + Whopper Jr. + King de Pollo + Aros de cebolla + 2 papas ch + 2 Conos',
        descripcion: 'Whopper sin queso, Whopper Jr. Sin queso, King de Pollo, aros de cebolla chicos, 2 papas chicas y 2 conos',
        src: '/img/Cupones/img34-FamilyKing.png',
      },      
      {
        id: 35,
        titulo: '2 Conos Sencillo',
        descripcion: '2 Cono sencillos por $14. Válido del 10 de Julio al 06 de Noviembre de 2023 y/o hasta agotar existencias.',
        src: '/img/Cupones/img35-ConosSencillo2.png',
      },      
      {
        id: 36,
        titulo: 'Whopper Jr. o Crispy Chicken con queso + Papas + Refresco + 3 Nuggets + Cono',
        descripcion: 'Whopper Jr sin queso o Crispy Chiken con queso, papas kids, refresco chico, 3 piezas nuggets y cono sencillo por',
        src: '/img/Cupones/img36-WhopperJR.png',
      },
      {
        id: 37,
        titulo: 'Croissandwich + Papas hashbrown + Jugo de Naranja',
        descripcion: 'Croissandwich, papas hashbrown chicas y jugo de naranja por $99. Válido del 10 de Julio al 06 de Noviembre de',
        src: '/img/Cupones/img37-Croissandwich.png',
      },
      {
        id: 38,
        titulo: 'Combo Guacamole Crunch + Cono',
        descripcion: 'Combo Guacamole Crunch chico y cono sencillo por $169. Válido del 10 de Julio al 06 de Noviembre de 2023',
        src: '/img/Cupones/img38-ComboGuacamole.png',
      },
    ];
    const mostrarFotoGrande = (id) => {
      // Accede a la imagen según su ID desde el objeto
      const imagen = imagenes.find((imagen) => imagen.id === id);
      if (imagen) {
        setImagenGrande(imagen.src);
        setTituloGrande(imagen.titulo);
        setDescripcionGrande(imagen.descripcion);
      }
    };
    
    return(
        <>
        <NavbarMe></NavbarMe>
        <main>
            <div className={stylesCupon.containerCupones}>
                <div className={stylesCupon.panelMenu}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/cupones" style={{color: 'rgb(197, 0, 0)'}}>Cupones</Link>
                    </li>
                </ul>
                
                
          {imagenes.map((imagen) => (
            <button
              key={imagen.id}
              className={stylesCupon.btCupones}
              onClick={() => mostrarFotoGrande(imagen.id)}
            >
                    <div className={stylesCupon.clNameDescrip}>
                      <div className={stylesCupon.clNameDescrip}>
                        <div className={stylesCupon.descripcion}>
                          <h4 className={stylesCupon.tituloCupon}>{imagen.titulo}</h4>
                          <p className={stylesCupon.descripcionCupon}>{imagen.descripcion}</p>
                        </div>
                        <div className={stylesCupon.imagen}>
                          <Image src={imagen.src} width={130} height={95} alt="img" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
          </div>  

        <div className={stylesCupon.containerInfo}>
        <div id="marco">
          {imagenGrande && (
            <Image
              src={imagenGrande}
              alt="Imagen grande"
              width={490} 
              height={320} 
            />
          )}
          <h1 id="titulo-cupon">{tituloGrande}</h1>
          <p id="descripcion">{descripcionGrande}</p>
        </div>
                <div id={stylesCupon.informacion}>
                    <p id="descripcion"></p>
                    <a href="https://play.google.com/store/apps/details?id=com.nosmk.burgerking">
                        <button className={stylesCupon.btDescargar} id="btDescargar">
                            Descargar la aplicación móvil
                        </button>
                    </a>
                </div>
            </div>
            </div>
        </main>
<footer className={stylesCupon.footer}>
<div className={stylesCupon.fooContainer}>
    <div className={stylesCupon.logo}>
        <Image className={stylesCupon.logo} src='/img/Menu/Logo-3.svg' width='40' height='20' 
        alt="logo"/>
    </div>

    <div className={stylesCupon.linksFoo}>
        <h2>Información</h2>
        <ul>
            <li className={stylesCupon.li}>
                <Link className={stylesCupon.link} href="/">Sitemap HTML</Link>
            </li>
            <li className={stylesCupon.li}>
                <Link className={stylesCupon.link} href="/">Restaurantes</Link>
            </li>
            <li className={stylesCupon.li}>
                <Link className={stylesCupon.link} href="/">Contáctanos</Link>
            </li>
            <li className={stylesCupon.li}>
                <Link className={stylesCupon.link} href="/">Preguntas frecuentes</Link>
            </li>
            <li className={stylesCupon.li}>
                <Link className={stylesCupon.link} href="/">Aviso de privacidad 
                Integral</Link>
            </li>
        </ul>
    </div>
</div>
<hr style={{ color: 'rgba(131, 131, 131, 0.354)' }} />
<div className={stylesCupon.redes}>
    <p>TM & © 2022 Burger King Corporation. All Rights reserved</p>

    <Image className={stylesCupon.imfR} src='/img/Menu/Facebook.svg' width='30'height='30' 
    alt="red"/>
    <Image src='/img/Menu/Twitter.svg' width='30'height='30' alt="red"/>
    <Image src='/img/Menu/Youtube.svg'  width='30'height='30' alt="red"/>
    <Image src='/img/Menu/Instagram.svg'  width='30'height='30' alt="red"/>
</div>
</footer>

        </>
    )
}

